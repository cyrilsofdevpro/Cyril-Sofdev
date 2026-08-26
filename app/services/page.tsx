import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { constructMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = constructMetadata({
  title: "Services | Cyril Sofdev",
  description: "AI development, full stack engineering, automation, trading bots, API development and consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pb-32 pt-32">
      <div className="container">
        <Reveal>
          <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-brand-cyan">
            Services
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How I can <span className="text-gradient">help.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Independent, end-to-end engineering — from a single integration to a full product build.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.pricingNote}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-semibold">Have a project in mind?</h2>
          <Button asChild size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </Reveal>
      </div>
    </div>
  );
}
