"use client";
import { useVisitorId } from "@/hooks/use-visitor-id";
import { useEffect, useRef, useState } from "react";
import MoziInput from "./MoziInput";
import MoziMessage from "./MoziMessage";
import { GREETING_CONTENT } from "@/lib/mozi/greeting";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  /** Transport/system notes render muted so they don't read as Mozi speaking. */
  variant?: "default" | "system";
}

interface HistoryMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  id: "greeting",
  role: "assistant",
  content: GREETING_CONTENT,
};

export default function MoziChat() {
  const visitorId = useVisitorId();
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [isLoading, setIsLoading] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visitorId || historyLoaded) return;

    async function loadHistory() {
      try {
        const res = await fetch(
          `/api/chat/history?visitorId=${encodeURIComponent(visitorId!)}`,
        );
        const data = await res.json();
        if (Array.isArray(data.messages) && data.messages.length > 0) {
          setMessages([
            GREETING,
            ...data.messages.map((m: HistoryMessage) => ({
              id: m.id,
              role: m.role,
              content: m.content,
            })),
          ]);
        }
      } catch (e) {
        // Silently fail — history is a nice-to-have
        console.log(e);
      } finally {
        setHistoryLoaded(true);
      }
    }

    loadHistory();
  }, [visitorId, historyLoaded]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSend(message: string) {
    if (!visitorId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, visitorId }),
      });

      const data = await res.json();

      // A server error is not Mozi talking. Render it as a system note so a
      // visitor never mistakes a 500 for the assistant's personality.
      const isSystemNote = !data.reply;

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            data.reply ??
            data.error ??
            "That didn't go through. Try sending it again.",
          variant: isSystemNote ? "system" : "default",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Lost the connection. Check your network and send again.",
          variant: "system",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full ">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10 custom-scrollbar">
        {messages.map((msg) => (
          <MoziMessage
            key={msg.id}
            role={msg.role}
            content={msg.content}
            variant={msg.variant}
          />
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#13131f] border border-white/[0.06] px-4 py-3 rounded-lg ">
              <div className="flex gap-1 ">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <MoziInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
}
