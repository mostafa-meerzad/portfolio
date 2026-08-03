import Groq from "groq-sdk";

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY is not defined in environment variables");
}

export const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const GROQ_MODEL = "openai/gpt-oss-120b";

/**
 * gpt-oss-120b is a reasoning model, and reasoning tokens come out of the same
 * completion budget as the visible answer. At the previous 450 tokens with the
 * default effort level ("medium"), reasoning could eat the whole budget and
 * `message.content` came back empty or truncated mid-sentence — which the
 * route turned into a 500 and the widget rendered as an error bubble.
 *
 * "low" effort is the right setting for short factual answers from a fixed
 * knowledge base; there is nothing here worth deliberating over.
 *
 * If you'd rather not run a reasoning model at all, "llama-3.3-70b-versatile"
 * is a drop-in swap — remove REASONING_EFFORT and REASONING_FORMAT below.
 */
export const REASONING_EFFORT = "low" as const;

/** Keeps reasoning tokens out of `message.content` entirely. */
export const REASONING_FORMAT = "hidden" as const;

export const MAX_COMPLETION_TOKENS = 800;

/**
 * Mozi states facts about a real person and must not improvise them. 0.8 was
 * a creative-writing setting and was a real source of drift on the "don't
 * state exact durations" and "2-4 sentences" rules.
 *
 * Order matters: only lower this AFTER the system prompt is behaving. Low
 * temperature makes the model follow the prompt more literally, so on the old
 * over-restrictive prompt it would have made the refusing worse, not better.
 */
export const TEMPERATURE = 0.35;

/** Turns of prior conversation sent as context (user + assistant messages). */
export const MAX_HISTORY_CONTEXT = 12;
