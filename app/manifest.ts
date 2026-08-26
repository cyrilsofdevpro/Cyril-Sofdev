import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cyril Sofdev — AI Software Engineer",
    short_name: "Cyril Sofdev",
    description: "AI Software Engineer, Full Stack Developer & Trading Systems Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0C10",
    theme_color: "#0A0C10",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
