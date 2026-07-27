// Patterns that indicate jailbreak attempts or off-topic abuse
const JAILBREAK_PATTERNS = [
  /ignore (previous|above|all) instructions/i,
  /pretend (you are|to be)/i,
  /act as (a|an|if)/i,
  /you are now/i,
  /jailbreak/i,
  /dan mode/i,
  /developer mode/i,
  /override your/i,
  /forget your (instructions|purpose|rules)/i,
  /system prompt/i,
  /repeat (your|the) (instructions|prompt|system)/i,
];

// Topics clearly unrelated to a portfolio assistant
const OFF_TOPIC_PATTERNS = [
  /write (me )?(a |some )?(code|function|script|program|class)/i,
  /debug (my|this)/i,
  /explain (how|what|why) .{0,30} (works|is|are)/i,
  /what is (react|next|node|javascript|python|sql|docker)/i,
  /how (do|does|to) (you |I )?(use|install|configure|set up)/i,
  /generate (a |an |some )?(image|story|essay|email|letter)/i,
  /translate (this|to)/i,
  /write a (poem|story|essay|cover letter)/i,
];

export type ModerationResult =
  | { pass: true }
  | { pass: false; reason: "jailbreak" | "off_topic" };

export function moderateInput(content: string): ModerationResult {
  for (const pattern of JAILBREAK_PATTERNS) {
    if (pattern.test(content)) {
      return { pass: false, reason: "jailbreak" };
    }
  }
  for (const pattern of OFF_TOPIC_PATTERNS) {
    if (pattern.test(content)) {
      return { pass: false, reason: "off_topic" };
    }
  }
  return { pass: true };
}

const JAILBREAK_RESPONSES = [
  "Nice try 😄 I'm Mozi — I only answer questions about Mostafa's work and experience. What would you like to know about him?",
  "Ha, clever — but I'm just here to talk about Mostafa. Ask me about his projects, stack, or background!",
  "I appreciate the creativity, but I'm Mozi and that's not changing. What do you want to know about Mostafa?",
  "That's not really my lane. I'm here to tell you about Mostafa — his skills, projects, and experience. Fire away!",
];

const OFF_TOPIC_RESPONSES = [
  "I'm only here to talk about Mostafa — his projects, stack, experience, and availability. Ask me anything about him!",
  "That's a bit outside what I do. I'm built to talk about Mostafa specifically — want to know about his tech stack or projects?",
  "Not quite my area! I'm Mozi, Mostafa's personal assistant. Ask me about his work, background, or how to reach him.",
  "I'll have to pass on that one — I'm focused on Mostafa. What would you like to know about him?",
];

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const JAILBREAK_RESPONSE = () => pick(JAILBREAK_RESPONSES);
export const OFF_TOPIC_RESPONSE = () => pick(OFF_TOPIC_RESPONSES);
