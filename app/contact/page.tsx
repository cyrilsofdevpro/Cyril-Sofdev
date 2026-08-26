import type { Metadata } from "next";
import { socials } from "@/data/socials";
import { iconMap } from "@/components/layout/icon-map";
import { constructMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = constructMetadata({
  title: "Contact | Cyril Sofdev",
  description: "Get in touch about freelance builds, collaborations, or full-time AI engineering opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pb-32 pt-32">
      <div className="container">
        <Reveal>
          <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-brand-cyan">
            Contact
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something <span className="text-gradient">intelligent.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Open to freelance builds, collaborations and full-time opportunities in AI engineering.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.05} className="space-y-3">
            {socials.map((s) => {
              const Icon = iconMap[s.icon] ?? iconMap.mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors hover:border-brand-cyan/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-brand-cyan">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.handle}</p>
                  </div>
                </a>
              );
            })}
            <div className="glass flex items-center gap-4 rounded-xl px-4 py-3.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-brand-cyan">
                <iconMap.user className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-xs text-muted-foreground">Nigeria · Remote-friendly</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
