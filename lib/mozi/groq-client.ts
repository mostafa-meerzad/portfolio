import Groq from "groq-sdk";

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY is not defined in environment variables");
}

export const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// export const GROQ_MODEL = "llama-3.3-70b-versatile";
export const GROQ_MODEL = "openai/gpt-oss-120b";

// Max tokens for Mozi's response
export const MAX_RESPONSE_TOKENS = 450;

// Max messages to send as history context (last N messages)
export const MAX_HISTORY_CONTEXT = 10;
