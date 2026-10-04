import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { constructMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { CaseStudySection } from "@/components/projects/case-study-section";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return constructMetadata({ title: "Project not found" });
  return constructMetadata({
    title: `${project.name} — ${project.tagline} | Cyril Sofdev`,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <div className="pb-32 pt-32">
      <div className="container">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <Reveal className="mt-8">
          <Badge variant="gradient" className="mb-4">
            {project.category.toUpperCase()}
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="ghost" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </Reveal>

        {project.images?.length ? (
          <Reveal delay={0.05}>
            <div className={`mt-12 grid gap-4 ${project.images.length > 1 ? "md:grid-cols-2" : ""}`}>
              {project.images.map((image, index) => (
                <figure key={image.src} className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={project.images!.length > 1 ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </Reveal>
        ) : null}

        <div className="mt-16 max-w-4xl">
          <CaseStudySection title="Overview">{caseStudy.overview}</CaseStudySection>
          <CaseStudySection title="Problem" accent="purple">
            {caseStudy.problem}
          </CaseStudySection>
          {caseStudy.research && <CaseStudySection title="Research">{caseStudy.research}</CaseStudySection>}
          {caseStudy.planning && (
            <CaseStudySection title="Planning" accent="purple">
              {caseStudy.planning}
            </CaseStudySection>
          )}
          <CaseStudySection title="Architecture">{caseStudy.architecture}</CaseStudySection>
          {caseStudy.aiAgent && (
            <CaseStudySection title="AI Agent & Training Studio" accent="purple">
              {caseStudy.aiAgent}
            </CaseStudySection>
          )}
          {caseStudy.databaseDesign && (
            <CaseStudySection title="Database Design" accent="purple">
              {caseStudy.databaseDesign}
            </CaseStudySection>
          )}
          {caseStudy.apiDesign && <CaseStudySection title="API Design">{caseStudy.apiDesign}</CaseStudySection>}
          {caseStudy.authentication && (
            <CaseStudySection title="Authentication" accent="purple">
              {caseStudy.authentication}
            </CaseStudySection>
          )}
          {caseStudy.frontend && <CaseStudySection title="Frontend">{caseStudy.frontend}</CaseStudySection>}
          {caseStudy.backend && (
            <CaseStudySection title="Backend" accent="purple">
              {caseStudy.backend}
            </CaseStudySection>
          )}
          {caseStudy.deployment && (
            <CaseStudySection title="Deployment">{caseStudy.deployment}</CaseStudySection>
          )}

          <CaseStudySection title="Challenges &amp; Solutions" accent="purple">
            <div className="space-y-5">
              {caseStudy.challenges.map((c) => (
                <div key={c.title}>
                  <p className="font-semibold text-foreground">{c.title}</p>
                  <p className="mt-1">{c.description}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Lessons Learned">
            <ul className="space-y-2">
              {caseStudy.lessonsLearned.map((l) => (
                <li key={l} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-cyan" />
                  {l}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {caseStudy.performance && (
            <CaseStudySection title="Performance" accent="purple">
              {caseStudy.performance}
            </CaseStudySection>
          )}

          <CaseStudySection title="Future Improvements">
            <ul className="space-y-2">
              {caseStudy.futureImprovements.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-purple" />
                  {f}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Results" accent="purple">
            <p className="text-base font-medium text-foreground">{caseStudy.results}</p>
          </CaseStudySection>
        </div>

        <Reveal className="mt-20 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Start a project like this</Link>
          </Button>
        </Reveal>
      </div>
    </div>
  );
}
