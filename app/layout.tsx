import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { constructMetadata, siteConfig } from "@/lib/seo";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cyril Sofdev",
  url: siteConfig.url,
  jobTitle: "AI Software Engineer",
  sameAs: [siteConfig.links.github, siteConfig.links.x],
  email: siteConfig.links.email,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
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
