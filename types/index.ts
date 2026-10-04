export type ProjectCategory = "ai" | "trading" | "web" | "automation";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  gradient: string;
  images?: { src: string; alt: string }[];
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    overview: string;
    aiAgent?: string;
    problem: string;
    research?: string;
    planning?: string;
    architecture: string;
    databaseDesign?: string;
    apiDesign?: string;
    authentication?: string;
    frontend?: string;
    backend?: string;
    deployment?: string;
    challenges: { title: string; description: string }[];
    lessonsLearned: string[];
    performance?: string;
    futureImprovements: string[];
    results: string;
  };
}

export interface TimelineItem {
  id: string;
  type: "education" | "experience" | "milestone";
  title: string;
  organization?: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface ExperienceRole {
  id: string;
  title: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  impact: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricingNote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  isPlaceholder: true;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  handle: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
}
