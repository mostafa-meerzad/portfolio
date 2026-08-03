import { prisma } from "@/lib/prisma";

/** How many messages we pull back for a conversation. */
const MAX_STORED_MESSAGES = 50;

/** Shape we need off a persisted message — structural, so Prisma's row type fits. */
export type StoredMessage = {
  role: string;
  content: string;
  flagged: boolean;
};

export type ModelMessage = {
  role: "user" | "assistant";
  content: string;
};

/**
 * Returns the visitor's most recent conversation with its LAST 50 messages,
 * in chronological order.
 *
 * The previous version used `orderBy: { createdAt: "asc" }, take: 50`, which
 * returns the OLDEST 50 messages. Combined with the `.slice(-10)` in the chat
 * route, that meant any conversation past 50 messages permanently fed the
 * model messages 41-50 — Mozi's memory froze near the start and never moved.
 * The fix is to sort descending, take, then reverse in JS.
 */
export async function getOrCreateConversation(visitorId: string) {
  const existing = await prisma.conversation.findFirst({
    where: { visitorId },
    orderBy: { updatedAt: "desc" },
    include: {
      messages: {
        orderBy: { createdAt: "desc" },
        take: MAX_STORED_MESSAGES,
      },
    },
  });

  if (existing) {
    return { ...existing, messages: [...existing.messages].reverse() };
  }

  return prisma.conversation.create({
    data: { visitorId },
    include: { messages: true },
  });
}

/**
 * Builds the message array handed to the model.
 *
 * Two things it filters out that used to poison every subsequent turn:
 *
 * 1. Flagged turns — the canned refusals and the inputs that triggered them.
 *    Feeding a refusal back as an in-context example teaches the model that
 *    stonewalling is the house style, so a single false positive made every
 *    later answer colder. Flagged turns still live in the DB and still render
 *    in the widget's history; they just don't steer the model.
 *
 * 2. A dangling trailing user message — left behind when a completion failed
 *    after the user turn was already persisted. That produced two consecutive
 *    user messages on the next request.
 */
export function buildModelHistory(
  messages: StoredMessage[],
  limit: number,
): ModelMessage[] {
  const usable = messages.filter((m) => !m.flagged);
  const window = usable.slice(-limit);

  // History should open on a user turn.
  while (window.length > 0 && window[0].role !== "user") {
    window.shift();
  }
  // ...and close on an assistant turn.
  while (window.length > 0 && window[window.length - 1].role !== "assistant") {
    window.pop();
  }

  return window.map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));
}

/**
 * Persists a complete exchange in one transaction.
 *
 * The route used to save the user message BEFORE calling the model, so a
 * failed completion left an orphaned user turn in the conversation. Writing
 * the pair together means the stored history is always well-formed.
 */
export async function saveTurn({
  conversationId,
  userContent,
  assistantContent,
  flagged = false,
}: {
  conversationId: string;
  userContent: string;
  assistantContent: string;
  flagged?: boolean;
}) {
  return prisma.$transaction([
    prisma.message.create({
      data: { conversationId, role: "user", content: userContent, flagged },
    }),
    prisma.message.create({
      data: {
        conversationId,
        role: "assistant",
        content: assistantContent,
        flagged,
      },
    }),
    prisma.conversation.update({
      where: { id: conversationId },
      data: { updatedAt: new Date() },
    }),
  ]);
}

export async function saveMessage({
  conversationId,
  role,
  content,
  flagged = false,
}: {
  conversationId: string;
  role: "user" | "assistant";
  content: string;
  flagged?: boolean;
}) {
  return prisma.message.create({
    data: { conversationId, role, content, flagged },
  });
}

export async function updateConversationTimestamp(conversationId: string) {
  return prisma.conversation.update({
    where: { id: conversationId },
    data: { updatedAt: new Date() },
  });
}
