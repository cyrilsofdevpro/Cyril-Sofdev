"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import logo from "@/app/logo.jpeg";

export function Header({ onOpenCommandPalette }: { onOpenCommandPalette: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 md:px-8">
      <Link href="/" className="flex items-center gap-2.5 font-display font-semibold tracking-tight">
        <Image src={logo} alt="logo" width={28} height={28} className="rounded-md" />
        <span className="h-2 w-2 rounded-full bg-brand-cyan shadow-[0_0_12px_theme(colors.brand.cyan)]" />
        Cyril Sofdev
      </Link>

      <div className="flex items-center gap-2.5">
        <button
          onClick={onOpenCommandPalette}
          className="hidden items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground sm:flex"
        >
          <Search className="h-3 w-3" />
          Search
          <kbd className="rounded border border-border bg-surface-2 px-1.5 py-0.5 text-[10px]">⌘K</kbd>
        </button>
        <div className="flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="hidden sm:inline">available for work</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
