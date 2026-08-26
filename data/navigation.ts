import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Experience", href: "/experience", icon: "briefcase" },
  { label: "Projects", href: "/projects", icon: "layout-grid" },
  { label: "GitHub", href: "/github", icon: "github" },
  { label: "Blog", href: "/blog", icon: "book-open" },
  { label: "Contact", href: "/contact", icon: "mail" },
];

// Subset shown in the floating dock nav — kept short so it doesn't crowd
// on mobile. Full list still lives in the header + command palette.
export const dockNav: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Experience", href: "/experience", icon: "briefcase" },
  { label: "Projects", href: "/projects", icon: "layout-grid" },
  { label: "GitHub", href: "/github", icon: "github" },
  { label: "Contact", href: "/contact", icon: "mail" },
];
