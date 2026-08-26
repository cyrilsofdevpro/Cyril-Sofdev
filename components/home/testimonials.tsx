import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/animations/reveal";

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal>
          <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-brand-cyan">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight">
            What people <span className="text-gradient">say.</span>
          </h2>
          <p className="mt-3 max-w-lg text-sm text-muted-foreground">
            These slots are placeholders until real client feedback comes in — nothing below is a
            genuine quote yet.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <Card className="h-full border-dashed">
                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-xs font-bold text-white">
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
