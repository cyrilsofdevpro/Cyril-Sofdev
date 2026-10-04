"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import ParticleFieldLoader from "@/components/three/particle-field-loader";
import { DockNav } from "@/components/layout/dock-nav";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/layout/command-palette";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();
  useKeyboardShortcut("k", () => setPaletteOpen((o) => !o));

  return (
    <>
      {pathname === "/" && <ParticleFieldLoader />}
      <CustomCursor />
      <ScrollProgress />
      <Header onOpenCommandPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <main className="relative z-[2]">{children}</main>
      <Footer />
      <DockNav />
      <BackToTop />
    </>
  );
}
