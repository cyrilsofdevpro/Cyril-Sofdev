import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { StackPreview } from "@/components/home/stack-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta-section";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Cyril Sofdev | AI Engineer, Software Developer & Quant Developer",
  description:
    "Cyril Sofdev is an AI Engineer and Software Developer building AI systems, LLM applications, full-stack platforms and algorithmic trading technology.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <StackPreview />
      <Testimonials />
      <CtaSection />
    </>
  );
}
