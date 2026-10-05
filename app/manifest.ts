import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cyril Sofdev | AI Engineer, Software Developer & Quant Developer",
    short_name: "Cyril Sofdev",
    description: "AI Engineer, Software Developer, and Quantitative Developer building AI systems and trading technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0C10",
    theme_color: "#0A0C10",
    icons: [{ src: "/logo.jpeg", sizes: "512x512", type: "image/jpeg" }],
  };
}
