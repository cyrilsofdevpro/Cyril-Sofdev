"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { useReducedMotion } from "framer-motion";

export default function ParticleFieldLoader() {
  const [Comp, setComp] = useState<ComponentType | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion !== false || window.matchMedia("(max-width: 767px)").matches) return;

    let mounted = true;
    import("@/components/three/particle-field").then((m) => {
      if (!mounted) return;
      const C = m.ParticleField as ComponentType | undefined;
      if (C) setComp(() => C);
    });
    return () => {
      mounted = false;
    };
  }, [reduceMotion]);

  if (!Comp) return null;
  const Loaded = Comp;
  return <Loaded />;
}
