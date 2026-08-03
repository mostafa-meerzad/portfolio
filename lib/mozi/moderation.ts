/**
 * Jailbreak detection only.
 *
 * There is deliberately NO off-topic pattern list here anymore. Whether a
 * question is about Mostafa is a semantic judgment, and the system prompt
 * makes it far better than a regex can. The old list blocked real recruiter
 * questions — "explain how the Fixr bidding system works", "does he act as a
 * tech lead", "what is Next.js used for in his stack" — and answered two of
 * them with "Nice try 😄".
 *
 * The asymmetry is the whole point: a false negative here costs nothing,
 * because the system prompt catches off-topic requests one layer down. A false
 * positive costs an opportunity.
 *
 * Every pattern below is anchored on word boundaries and requires an explicit
 * override phrase, so ordinary questions cannot trip them.
 */
const JAILBREAK_PATTERNS: RegExp[] = [
  // "ignore all previous instructions", "disregard your rules", "forget your purpose"
  /\b(?:ignore|disregard|forget|override)\s+(?:all\s+|any\s+|your\s+|the\s+|previous\s+|above\s+|prior\s+|earlier\s+)+(?:instructions?|rules?|prompts?|guidelines?|purpose|training)\b/i,

  // "repeat your system prompt", "print the instructions above", "leak your prompt"
  /\b(?:reveal|repeat|print|output|show|display|dump|leak)\s+(?:me\s+)?(?:your|the)\s+(?:full\s+|entire\s+|exact\s+|original\s+|initial\s+|verbatim\s+)?(?:system\s+)?(?:prompt|instructions?)\b/i,

  // persona replacement
  /\byou\s+are\s+no\s+longer\s+\w+/i,
  /\bfrom\s+now\s+on,?\s+you\s+(?:are|will\s+be|must\s+act\s+as|shall)\b/i,

  // named jailbreak modes
  /\bjailbreak(?:ing|s)?\b/i,
  /\bDAN\s+mode\b/i,
  /\bdeveloper\s+mode\s+(?:enabled|on|activated)\b/i,
];

export type ModerationResult =
  | { pass: true }
  | { pass: false; reason: "jailbreak" };

export function moderateInput(content: string): ModerationResult {
  for (const pattern of JAILBREAK_PATTERNS) {
    if (pattern.test(content)) {
      return { pass: false, reason: "jailbreak" };
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

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const JAILBREAK_RESPONSE = () => pick(JAILBREAK_RESPONSES);
