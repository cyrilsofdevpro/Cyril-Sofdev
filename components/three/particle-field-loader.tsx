"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

export default function ParticleFieldLoader() {
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    let mounted = true;
    import("@/components/three/particle-field").then((m) => {
      if (!mounted) return;
      const C = (m && (m.ParticleField || m.default)) as ComponentType | undefined;
      if (C) setComp(() => C);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!Comp) return null;
  const Loaded = Comp;
  return <Loaded />;
}
