import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white/[0.05] to-white/[0.015] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand-purple/40"
    >
      <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
        <span className="relative z-10 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-[11px] backdrop-blur-sm">
          {project.tagline}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold">{project.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-cyan">
          Case Study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
