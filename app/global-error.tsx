"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#0A0C10] px-6 text-center text-[#E9EBF1]">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">Error</p>
        <h1 className="text-3xl font-bold tracking-tight">Something went wrong.</h1>
        <p className="max-w-sm text-sm text-white/60">
          An unexpected error occurred. Try again, or head back home.
        </p>
        <Button onClick={reset}>Try again</Button>
      </body>
    </html>
  );
}
