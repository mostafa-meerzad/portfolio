/**
 * The opening line the widget shows before the visitor types anything.
 *
 * It lives in its own module because BOTH sides need it: the client renders
 * it, and the chat route seeds it as the first assistant turn so the model
 * knows it already introduced itself. Previously it was client-only, so a
 * visitor saw Mozi say hello, replied "hi", and the model received a bare
 * greeting with no idea it had just spoken.
 *
 * Keeping it separate from system-prompt.ts matters: importing that module
 * into a client component would ship the entire system prompt to the browser.
 */
export const GREETING_CONTENT =
  "Hey, I'm Mozi ✦ Ask me anything about Mostafa's work, stack, experience, or availability.";
