"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export function TypingText({
  words,
  className,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseMs = 1300,
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length] ?? "";

    if (!deleting && text.length < currentWord.length) {
      const timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!deleting && text.length === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(timeout);
    }

    if (deleting && text.length > 0) {
      const timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (deleting && text.length === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 0);
      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-brand-cyan align-middle" />
    </span>
  );
}
