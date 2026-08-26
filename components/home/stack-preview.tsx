import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function StackPreview() {
  return (
    <section className="container py-28">
      <Reveal>
        <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-brand-cyan">
          Tech Stack
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I reach for <span className="text-gradient">every day.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 0.05}>
            <Card className="h-full p-5 transition-transform hover:-translate-y-1 hover:border-brand-cyan/40">
              <h3 className="mb-3.5 font-mono text-xs uppercase tracking-wider text-brand-purple">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-8 text-center">
        <Link href="/about" className="text-sm font-semibold text-brand-cyan hover:underline">
          See full skills breakdown →
        </Link>
      </Reveal>
    </section>
  );
}
