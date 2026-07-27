import { NextRequest, NextResponse } from "next/server";
import {
  groq,
  GROQ_MODEL,
  MAX_RESPONSE_TOKENS,
  MAX_HISTORY_CONTEXT,
} from "@/lib/mozi/groq-client";
import { checkRateLimit } from "@/lib/mozi/rate-limiter";
import {
  moderateInput,
  JAILBREAK_RESPONSE,
  OFF_TOPIC_RESPONSE,
} from "@/lib/mozi/moderation";
import {
  getOrCreateConversation,
  saveMessage,
  updateConversationTimestamp,
} from "@/lib/mozi/visitor";
import { SYSTEM_PROMPT } from "@/lib/mozi/system-prompt";

const MAX_INPUT_LENGTH = 500;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, visitorId } = body;

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }
    if (!visitorId || typeof visitorId !== "string") {
      return NextResponse.json(
        { error: "Visitor ID is required" },
        { status: 400 },
      );
    }
    if (message.length > MAX_INPUT_LENGTH) {
      return NextResponse.json(
        { error: `Message too long. Maximum ${MAX_INPUT_LENGTH} characters.` },
        { status: 400 },
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    const rateCheck = checkRateLimit(visitorId, ip);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          reply:
            "You've reached the message limit for now. Come back in an hour — or reach out to Mostafa directly via the contact page!",
          rateLimited: true,
        },
        { status: 429 },
      );
    }

    const moderation = moderateInput(message);
    if (!moderation.pass) {
      const conversation = await getOrCreateConversation(visitorId);

      await saveMessage({
        conversationId: conversation.id,
        role: "user",
        content: message,
        flagged: true,
      });

      const reply =
        moderation.reason === "jailbreak"
          ? JAILBREAK_RESPONSE()
          : OFF_TOPIC_RESPONSE();

      await saveMessage({
        conversationId: conversation.id,
        role: "assistant",
        content: reply,
      });

      await updateConversationTimestamp(conversation.id);

      return NextResponse.json({ reply, flagged: true });
    }

    const conversation = await getOrCreateConversation(visitorId);

    const historyMessages = conversation.messages
      .slice(-MAX_HISTORY_CONTEXT)
      .map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      }));

    await saveMessage({
      conversationId: conversation.id,
      role: "user",
      content: message,
    });

    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      max_tokens: MAX_RESPONSE_TOKENS,
      temperature: 0.8,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...historyMessages,
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 },
      );
    }

    await saveMessage({
      conversationId: conversation.id,
      role: "assistant",
      content: reply,
    });

    await updateConversationTimestamp(conversation.id);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[Mozi Chat Error]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
