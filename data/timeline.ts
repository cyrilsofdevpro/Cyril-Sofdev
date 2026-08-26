import type { TimelineItem } from "@/types";

export const storyTimeline: TimelineItem[] = [
  {
    id: "curiosity",
    type: "milestone",
    title: "Curiosity → Code",
    period: "The beginning",
    description:
      "Started with a curiosity for technology and software development — pulling things apart to understand how they worked, then rebuilding them better.",
  },
  {
    id: "ai-discovery",
    type: "milestone",
    title: "Discovering AI & Automation",
    period: "Early growth",
    description:
      "Became genuinely passionate about artificial intelligence, automation and modern web development — and started treating every idea as a product, not an exercise.",
  },
  {
    id: "building",
    type: "milestone",
    title: "Building Complete Products",
    period: "Leveling up",
    description:
      "Instead of stopping at tutorials, challenged myself to build complete products from scratch — panels, platforms, bots — each one teaching new lessons in system design and scale.",
  },
  {
    id: "today",
    type: "milestone",
    title: "Cyril Sofdev Today",
    period: "Now",
    current: true,
    description:
      "Focused on AI-powered products that pair intelligent automation with excellent user experience — from self-built LLMs to trading systems.",
  },
];

export const education: TimelineItem[] = [
  {
    id: "lautech",
    type: "education",
    title: "Physics Student",
    organization: "Ladoke Akintola University of Technology (LAUTECH), Nigeria",
    period: "Ongoing",
    description:
      "Formal study in Physics, alongside daily independent learning in AI research, software engineering, cloud computing, machine learning, LLMs, and system design.",
    current: true,
  },
];

export const values = [
  {
    title: "Build to learn",
    description: "Every project is a lesson in architecture, not just a demo.",
  },
  {
    title: "Own the whole stack",
    description: "From UI to inference — understanding every layer means better decisions at each one.",
  },
  {
    title: "Ship real products",
    description: "Complete, usable systems over polished prototypes that never leave the sandbox.",
  },
  {
    title: "AI in service of people",
    description: "Automation should make people's lives easier, not replace their judgment.",
  },
];

export const nowSection = {
  heading: "What I'm doing now",
  items: [
    "Training and refining a from-scratch LLM (SofAI)",
    "Running and iterating on an algorithmic forex signal engine",
    "Studying Physics at LAUTECH while learning system design daily",
    "Open to select freelance and full-time AI engineering opportunities",
  ],
};
