import type { ExperienceRole } from "@/types";

export const experience: ExperienceRole[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    period: "Ongoing",
    summary:
      "Design and ship AI-powered features and products — from prompt-engineered integrations to a fully self-trained language model.",
    responsibilities: [
      "Architecting LLM-integrated features across web platforms",
      "Training and serving a custom transformer model from scratch",
      "Building AI-assisted moderation and summarization pipelines",
    ],
    technologies: ["Python", "PyTorch", "Prompt Engineering", "NLP", "Transformers"],
    achievements: [
      "Built SofAI, a self-hosted LLM with zero external API dependency",
      "Shipped AI summarization and moderation for a live news platform",
    ],
    impact:
      "Reduced reliance on third-party AI providers while keeping product AI features fast and cost-predictable.",
  },
  {
    id: "fullstack-engineer",
    title: "Full Stack Engineer",
    period: "Ongoing",
    summary:
      "End-to-end ownership of SaaS products — architecture, database design, API layer, and interface.",
    responsibilities: [
      "Designing relational schemas and API architecture with Prisma/Postgres",
      "Building production Next.js applications with server components",
      "Implementing authentication, admin dashboards and approval workflows",
    ],
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL", "Supabase"],
    achievements: [
      "Shipped multiple production SaaS platforms solo, end to end",
      "Built role-based admin panels with real-time approval workflows",
    ],
    impact: "Delivered complete, deployable products without handing off any layer of the stack.",
  },
  {
    id: "automation-engineer",
    title: "Automation Engineer",
    period: "Ongoing",
    summary: "Build workflow automation and API integrations that remove repetitive operational work.",
    responsibilities: [
      "Designing webhook and scheduled-job driven automation pipelines",
      "Integrating disparate business tools via REST APIs",
      "Building business-facing chatbots for common operational tasks",
    ],
    technologies: ["Python", "Node.js", "REST APIs"],
    achievements: ["Deployed automation systems saving hours of manual work weekly across client operations"],
    impact: "Turned repetitive manual processes into reliable, monitored automated systems.",
  },
  {
    id: "trading-systems-engineer",
    title: "Trading Systems Engineer",
    period: "Ongoing",
    summary: "Build algorithmic trading systems covering analysis, signal generation, and execution.",
    responsibilities: [
      "Developing MQL5 execution logic inside MetaTrader 5",
      "Building weighted technical-indicator signal engines in Python",
      "Implementing risk management and position-sizing controls",
    ],
    technologies: ["MQL5", "MetaTrader 5", "Python", "Risk Management"],
    achievements: ["Built SofAI FX Bot — a full signal-to-execution automated trading pipeline"],
    impact: "Removed manual execution lag and emotional error from live trading decisions.",
  },
];
