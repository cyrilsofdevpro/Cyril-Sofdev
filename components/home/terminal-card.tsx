"use client";

import { useEffect, useRef, useState } from "react";

interface TermLine {
  type: "k" | "s" | "c";
  text: string;
}

const lines: TermLine[] = [
  { type: "k", text: "$ whoami" },
  { type: "s", text: "cyril sofdev · ai software engineer" },
  { type: "k", text: "$ cat mission.txt" },
  { type: "c", text: "building AI-powered products that make" },
  { type: "c", text: "people smarter and businesses stronger." },
  { type: "k", text: "$ ls stack/" },
  { type: "c", text: "next.js  react  python  postgresql" },
  { type: "c", text: "pytorch  supabase  mql5" },
  { type: "k", text: "$ status" },
  { type: "s", text: "✓ open to new projects" },
];

const colorFor: Record<TermLine["type"], string> = {
  k: "text-brand-cyan",
  s: "text-emerald-400",
  c: "text-[#8B93A6]",
};

export function TerminalCard() {
  const [rendered, setRendered] = useState<{ text: string; type: TermLine["type"] }[]>([]);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let lineIdx = 0;
    let charIdx = 0;

    function typeNext() {
      if (lineIdx >= lines.length) return;
      const line = lines[lineIdx];
      if (!line) return;
      charIdx++;
      setRendered((prev) => {
        const next = [...prev];
        next[lineIdx] = { text: line.text.slice(0, charIdx), type: line.type };
        return next;
      });
      if (charIdx >= line.text.length) {
        lineIdx++;
        charIdx = 0;
        setTimeout(typeNext, 220);
      } else {
        setTimeout(typeNext, 14);
      }
    }

    const start = setTimeout(typeNext, 500);
    return () => clearTimeout(start);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#12151C] to-[#0D0F14] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-1.5 font-mono text-[11.5px] text-[#8B93A6]">cyrilsofdev@engineer ~ %</span>
      </div>
      <div className="min-h-[230px] p-5 font-mono text-[12.8px] leading-[1.85]">
        {rendered.map((line, i) => (
          <div key={i} className={colorFor[line.type]}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
