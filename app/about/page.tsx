import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Reveal } from "@/components/animations/reveal";
import { storyTimeline, education, values, nowSection } from "@/data/timeline";
import { skillLevels } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About — Cyril Sofdev",
  description:
    "My story, mission, values, education and what I'm learning right now — as an AI Software Engineer building intelligent products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container py-32">
      {/* Intro */}
      <Reveal>
        <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-brand-cyan">
          About
        </span>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          From curiosity to <span className="text-gradient">shipped products.</span>
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Every project on this page is a lesson in architecture, UI/UX, APIs, deployment and
          machine learning — learned by building, not just studying.
        </p>
      </Reveal>

      {/* Mission / Vision */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        <Reveal>
          <Card className="h-full p-7">
            <h2 className="font-display text-lg font-semibold">Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I build intelligent software, AI-powered platforms, automation systems and modern web
              applications that solve real-world problems — combining artificial intelligence with
              sound software engineering to build products people love.
            </p>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="h-full p-7">
            <h2 className="font-display text-lg font-semibold">Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              AI should make people&apos;s lives easier, businesses smarter and communities
              stronger. I want to keep owning the full stack of that — from the model to the
              interface — rather than treating AI as someone else&apos;s API.
            </p>
          </Card>
        </Reveal>
      </div>

      {/* Story Timeline */}
      <div className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight">My Story</h2>
        </Reveal>
        <div className="relative mt-10 border-l border-border pl-8">
          {storyTimeline.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} className="relative pb-11 last:pb-0">
              <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-brand-cyan bg-background shadow-[0_0_0_4px_rgba(34,211,238,0.08)]" />
              <div className="mb-1 font-mono text-[11px] text-muted-foreground">{item.period}</div>
              <h3 className="font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight">Values</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <Card className="h-full p-6">
                <h3 className="font-display text-sm font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight">Education</h2>
        </Reveal>
        {education.map((edu) => (
          <Reveal key={edu.id}>
            <Card className="mt-8 p-7">
              <h3 className="font-display text-lg font-semibold">{edu.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{edu.organization}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {[
                  "AI Research",
                  "Software Engineering",
                  "Cloud Computing",
                  "Machine Learning",
                  "Large Language Models",
                  "System Design",
                  "Modern Web Development",
                ].map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Skills breakdown */}
      <div className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight">Skills</h2>
        </Reveal>
        <div className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {skillLevels.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.03}>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Now section */}
      <div className="mt-24">
        <Reveal>
          <Card className="p-8">
            <h2 className="font-display text-xl font-semibold">{nowSection.heading}</h2>
            <ul className="mt-5 space-y-3">
              {nowSection.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
