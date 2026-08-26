"use client";

import { useEffect } from "react";

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: { meta?: boolean; ctrl?: boolean } = { meta: true, ctrl: true }
) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const modifierPressed = options.meta || options.ctrl ? e.metaKey || e.ctrlKey : true;
      if (modifierPressed && e.key.toLowerCase() === key.toLowerCase()) {
        e.preventDefault();
        callback();
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, callback, options.meta, options.ctrl]);
}
