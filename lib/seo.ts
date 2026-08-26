import type { Metadata } from "next";

export const siteConfig = {
  name: "Cyril Sofdev",
  title: "Cyril Sofdev — AI Software Engineer",
  description:
    "Cyril Sofdev — AI Software Engineer, Full Stack Developer & Trading Systems Developer. Building intelligent products, automation systems and trading technology.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cyrilsofdev.dev",
  ogImage: "/og.png",
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
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@cyrilsofdevfx",
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
