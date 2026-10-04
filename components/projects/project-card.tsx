import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white/[0.05] to-white/[0.015] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand-purple/40"
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        {project.images?.[0] && (
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 font-mono text-[11px] text-white backdrop-blur-sm">
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
