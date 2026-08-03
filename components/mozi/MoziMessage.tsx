import { motion } from "motion/react";

interface MoziMessageProps {
  role: "user" | "assistant";
  content: string;
  /** "system" is for transport/error notes, not for anything Mozi said. */
  variant?: "default" | "system";
}

export default function MoziMessage({
  role,
  content,
  variant = "default",
}: MoziMessageProps) {
  const isUser = role === "user";

  const tone = isUser
    ? "bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 text-[#3ecf8e]"
    : variant === "system"
      ? "bg-transparent border border-white/[0.06] text-white/35"
      : "bg-[#13131f] border border-white/[0.06] text-white/70";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
          max-w-[80%] px-4 py-3 rounded-lg font-mono text-[13px] leading-relaxed
          ${tone}
        `}
      >
        {content}
      </div>
    </motion.div>
  );
}
