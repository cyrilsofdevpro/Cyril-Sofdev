import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { StackPreview } from "@/components/home/stack-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta-section";

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
