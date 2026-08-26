import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { GithubStats } from "@/components/github/github-stats";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = constructMetadata({
  title: "GitHub Activity | Cyril Sofdev",
  description: "Live GitHub stats, repositories and contribution activity for Cyril Sofdev.",
  path: "/github",
});

export default function GithubPage() {
  return (
    <div className="pb-32 pt-32">
      <div className="container">
        <Reveal>
          <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-brand-cyan">
            Shipping Log
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Building in <span className="text-gradient">public.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Live data pulled directly from the GitHub API — no placeholder numbers.
          </p>
        </Reveal>

        <div className="mt-14">
          <GithubStats />
        </div>
      </div>
    </div>
  );
}
