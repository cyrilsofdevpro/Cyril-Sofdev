import Link from "next/link";
import { socials } from "@/data/socials";
import { iconMap } from "@/components/layout/icon-map";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14 pb-40 text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = iconMap[s.icon] ?? iconMap.mail;
            return (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-colors hover:text-brand-cyan"
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cyril Sofdev — built with Next.js, Tailwind &amp; a lot of coffee.
        </p>
      </div>
    </footer>
  );
}
