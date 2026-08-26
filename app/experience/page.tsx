import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Reveal } from "@/components/animations/reveal";
import { experience } from "@/data/experience";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Experience — Cyril Sofdev",
  description:
    "Professional experience across AI engineering, full stack development, automation and trading systems.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="container py-32">
      <Reveal>
        <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-brand-cyan">
          Experience
        </span>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Independent engineer, <span className="text-gradient">full ownership.</span>
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          I work as an independent software engineer and product builder — designing, building,
          deploying and maintaining end-to-end AI-powered software.
        </p>
      </Reveal>

      <div className="relative mt-16 space-y-6 border-l border-border pl-8 sm:pl-10">
        {experience.map((role, i) => (
          <Reveal key={role.id} delay={i * 0.08} className="relative">
            <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-brand-purple bg-background sm:-left-[49px]" />
            <Card className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-xl font-semibold">{role.title}</h2>
                <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-brand-cyan">
                    Responsibilities
                  </h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="text-brand-cyan">—</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-brand-purple">
                    Achievements
                  </h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {role.achievements.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="text-brand-purple">—</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {role.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-border bg-surface-2 p-4 text-sm">
                <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span className="text-muted-foreground">{role.impact}</span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
