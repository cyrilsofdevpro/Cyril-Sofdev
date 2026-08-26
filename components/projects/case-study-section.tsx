import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/reveal";

export function CaseStudySection({
  title,
  children,
  accent = "cyan",
}: {
  title: string;
  children: ReactNode;
  accent?: "cyan" | "purple";
}) {
  return (
    <Reveal className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <div className="grid gap-4 sm:grid-cols-[200px_1fr] sm:gap-10">
        <h2
          className={`font-mono text-xs uppercase tracking-wider ${
            accent === "cyan" ? "text-brand-cyan" : "text-brand-purple"
          }`}
        >
          {title}
        </h2>
        <div className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  );
}
