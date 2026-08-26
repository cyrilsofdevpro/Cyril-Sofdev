import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { getFeaturedProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" className="container py-28">
      <Reveal>
        <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-brand-cyan">
          Featured Work
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Products, not <span className="text-gradient">prototypes.</span>
        </h2>
        <p className="mt-3.5 max-w-xl text-muted-foreground">
          A selection of what I&apos;ve shipped end to end. Each one has a full case study —
          architecture, decisions, and what I&apos;d do differently.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link
              href={`/projects/${project.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white/[0.05] to-white/[0.015] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand-purple/40"
            >
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} bg-opacity-10`}
              >
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
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-surface-2"
        >
          View all projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
