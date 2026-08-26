"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 18 + 6);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 350);
        }
        return next;
      });
    }, 160);

    // Safety fallback so the loader never blocks the page indefinitely.
    const fallback = setTimeout(() => setDone(true), 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-background"
        >
          <div className="font-display text-2xl font-bold tracking-tight">
            cyril<span className="text-brand-cyan">.</span>sofdev
          </div>
          <div className="h-0.5 w-56 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan transition-[width] duration-200"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="font-mono text-[11px] text-muted-foreground">
            {progress >= 100 ? "ready — 100%" : `initializing… ${Math.floor(progress)}%`}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
