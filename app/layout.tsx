import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { constructMetadata, siteConfig } from "@/lib/seo";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sofdev Inc",
  url: siteConfig.url,
  sameAs: [siteConfig.links.github, siteConfig.links.x],
  legalName: "Sofdev Inc",
  description: "Software engineering, AI systems, and quantitative technology work by Cyril Sofdev.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cyril Sofdev",
  givenName: "Cyril",
  familyName: "Sofdev",
  alternateName: "Olajide Cyril Israel",
  jobTitle: ["AI Engineer", "Software Developer", "Full-Stack Developer", "Quantitative Developer"],
  url: siteConfig.url,
  sameAs: [siteConfig.links.github, siteConfig.links.x],
  email: siteConfig.links.email,
  knowsAbout: [
    "AI engineering",
    "LLM applications",
    "Generative AI",
    "Machine learning",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "algorithmic trading",
    "quantitative development",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Sofdev Inc",
    url: siteConfig.url,
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Cyril Sofdev",
    url: siteConfig.url,
  },
  url: siteConfig.url,
  description:
    "Profile page for Cyril Sofdev, an AI Engineer, Software Developer, Full-Stack Developer, and Quantitative Developer.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cyril Sofdev",
  url: siteConfig.url,
  description:
    "Portfolio and engineering work of Cyril Sofdev, AI Engineer, Software Developer, and Quantitative Developer.",
};

const jsonLd = [personSchema, profilePageSchema, organizationSchema, websiteSchema];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div
            className="noise-overlay pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
            aria-hidden
          />
          <SiteShell>{children}</SiteShell>
          <Toaster theme="dark" position="bottom-right" richColors />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
