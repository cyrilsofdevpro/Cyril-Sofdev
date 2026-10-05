import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/services",
    "/github",
    "/contact",
  ].map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: new URL(`/projects/${p.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
