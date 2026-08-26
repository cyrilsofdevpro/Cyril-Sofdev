"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import type { ProjectCategory } from "@/types";

const filters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / LLM" },
  { key: "trading", label: "Trading" },
  { key: "web", label: "Web" },
  { key: "automation", label: "Automation" },
];

export function ProjectGrid() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-xs transition-all",
              active === f.key
                ? "border-transparent bg-gradient-to-r from-brand-cyan to-brand-blue font-semibold text-[#06131A]"
                : "border-border bg-surface-2 text-muted-foreground hover:text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <motion.div key={project.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
