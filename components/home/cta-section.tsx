import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-12 text-center backdrop-blur-xl sm:p-20">
          <div className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-[0.07]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something <span className="text-gradient">intelligent.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Open to freelance builds, collaborations and full-time opportunities in AI engineering.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/projects">View my work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
