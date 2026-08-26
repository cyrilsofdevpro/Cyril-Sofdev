"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { dockNav } from "@/data/navigation";
import { iconMap } from "@/components/layout/icon-map";
import { cn } from "@/lib/utils";

export function DockNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 flex items-center gap-1 rounded-full glass p-2 shadow-2xl shadow-black/40"
    >
      {dockNav.map((item) => {
        const Icon = iconMap[item.icon];
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            {isActive && (
              <motion.span
                layoutId="dock-active"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue shadow-[0_0_18px_-3px_rgba(34,211,238,0.7)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <Icon
              className={cn(
                "relative z-10 h-[18px] w-[18px] transition-colors",
                isActive && "text-[#06131A]"
              )}
            />
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
