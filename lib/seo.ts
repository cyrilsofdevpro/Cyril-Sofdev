import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://cyrilsofdevpro.vercel.app";

function getSiteUrl(value: string | undefined): string {
  const candidate = value?.trim();
  if (!candidate) return DEFAULT_SITE_URL;

  try {
    const url = new URL(candidate);
    const hostname = url.hostname.toLowerCase();
    if (!["http:", "https:"].includes(url.protocol)) return DEFAULT_SITE_URL;
    if (["localhost", "127.0.0.1", "0.0.0.0"].includes(hostname)) return DEFAULT_SITE_URL;
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Cyril Sofdev",
  title: "Cyril Sofdev | AI Engineer, Software Developer & Quant Developer",
  description:
    "Cyril Sofdev is an AI Engineer and Software Developer building AI systems, LLM applications, full-stack platforms, and algorithmic trading technology.",
  url: getSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  ogImage: "/logo.jpeg",
  links: {
    github: "https://github.com/cyrilsofdevpro",
    x: "https://x.com/cyrilsofdevfx",
    whatsapp: "https://wa.me/23470751745636",
    email: "cyrilsofdev@gmail.com",
  },
};

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const fullUrl = new URL(normalizedPath, siteConfig.url).toString();
  const imageUrl = image.startsWith("http") ? image : new URL(image, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: [
      "Cyril Sofdev",
      "AI Engineer",
      "AI Software Engineer",
      "Software Developer",
      "Full-Stack Developer",
      "AI Developer",
      "Python Developer",
      "LLM Engineer",
      "Generative AI",
      "Artificial Intelligence",
      "Machine Learning",
      "NLP",
      "Transformers",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "APIs",
      "Cloud Engineering",
      "DevOps",
      "Algorithmic Trading",
      "Quantitative Development",
      "Quant Trading",
      "Forex Automation",
      "MQL5",
      "AI-powered applications",
      "Sofdev Inc",
    ],
    authors: [{ name: "Cyril Sofdev" }],
    verification: {
      google: "bSn7eAZE6BqcUu4ffw3fc6EZYss9gks9GY27ebqXu0g",
    },
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: fullUrl },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@cyrilsofdevfx",
      site: "@cyrilsofdevfx",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
