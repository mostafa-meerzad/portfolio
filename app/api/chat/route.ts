import { NextRequest, NextResponse } from "next/server";
import {
  groq,
  GROQ_MODEL,
  MAX_COMPLETION_TOKENS,
  MAX_HISTORY_CONTEXT,
  REASONING_EFFORT,
  REASONING_FORMAT,
  TEMPERATURE,
} from "@/lib/mozi/groq-client";
import { checkRateLimit } from "@/lib/mozi/rate-limiter";
import { moderateInput, JAILBREAK_RESPONSE } from "@/lib/mozi/moderation";
import {
  getOrCreateConversation,
  buildModelHistory,
  saveTurn,
} from "@/lib/mozi/visitor";
import { SYSTEM_PROMPT } from "@/lib/mozi/system-prompt";
import { GREETING_CONTENT } from "@/lib/mozi/greeting";
import type { ModelMessage } from "@/lib/mozi/visitor";

const MAX_INPUT_LENGTH = 500;

const EMPTY_COMPLETION_REPLY =
  "That one didn't come through on my end. Ask me again, or reach Mostafa directly from the contact page.";

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

    const conversation = await getOrCreateConversation(visitorId);

    // Jailbreak attempts get a canned reply and never reach the model. Both
    // halves of the exchange are stored flagged so buildModelHistory keeps
    // them out of future context — the visitor still sees them in the widget.
    const moderation = moderateInput(message);
    if (!moderation.pass) {
      const reply = JAILBREAK_RESPONSE();

      await saveTurn({
        conversationId: conversation.id,
        userContent: message,
        assistantContent: reply,
        flagged: true,
      });

      return NextResponse.json({ reply, flagged: true });
    }

    const history = buildModelHistory(
      conversation.messages,
      MAX_HISTORY_CONTEXT,
    );

    // On the first real exchange, seed the greeting the widget already
    // displayed so the model doesn't answer a "hi" as if it came out of
    // nowhere. This was a large part of why greetings got deflected.
    const seed: ModelMessage[] =
      history.length === 0
        ? [{ role: "assistant", content: GREETING_CONTENT }]
        : [];

    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      max_completion_tokens: MAX_COMPLETION_TOKENS,
      temperature: TEMPERATURE,
      reasoning_effort: REASONING_EFFORT,
      reasoning_format: REASONING_FORMAT,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...seed,
        ...history,
        { role: "user", content: message },
      ],
    });

    const choice = completion.choices[0];
    const reply = choice?.message?.content?.trim();

    if (!reply) {
      // Nothing is persisted here, so a failed turn can't corrupt the history.
      console.error("[Mozi] empty completion", {
        finishReason: choice?.finish_reason,
        usage: completion.usage,
      });
      return NextResponse.json({ reply: EMPTY_COMPLETION_REPLY, soft: true });
    }

    await saveTurn({
      conversationId: conversation.id,
      userContent: message,
      assistantContent: reply,
    });

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[Mozi Chat Error]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
