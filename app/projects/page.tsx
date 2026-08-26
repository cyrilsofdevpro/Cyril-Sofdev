import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Reveal } from "@/components/animations/reveal";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata: Metadata = constructMetadata({
  title: "Projects — Cyril Sofdev",
  description:
    "AI platforms, a from-scratch LLM, trading systems, automation and client web builds — six products with full case studies.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="container py-32">
      <Reveal>
        <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-brand-cyan">
          Projects
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Featured <span className="text-gradient">work.</span>
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Six products spanning AI news, a self-trained LLM, algorithmic trading, support
          platforms, automation and client sites. Open any project for the full case study.
        </p>
      </Reveal>

      <div className="mt-14">
        <ProjectGrid />
      </div>
    </div>
  );
}
