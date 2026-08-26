import type { Skill, SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C#", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Supabase", "SQLite", "Prisma ORM"],
  },
  {
    category: "AI / ML",
    items: [
      "Transformers",
      "PyTorch",
      "Hugging Face",
      "Prompt Engineering",
      "LLM Integration",
      "NLP",
    ],
  },
  {
    category: "Trading",
    items: [
      "MetaTrader 5",
      "MQL5",
      "TradingView",
      "Forex Automation",
      "Risk Management",
      "Algorithmic Trading",
    ],
  },
  {
    category: "Cloud & Tools",
    items: ["Vercel", "Render", "GitHub", "Git", "VS Code", "Postman", "pnpm"],
  },
];

export const skillLevels: Skill[] = [
  { name: "Artificial Intelligence", level: 98 },
  { name: "Machine Learning", level: 95 },
  { name: "Prompt Engineering", level: 97 },
  { name: "Next.js / React", level: 96 },
  { name: "Python", level: 94 },
  { name: "Backend Development", level: 93 },
  { name: "API Integration", level: 96 },
  { name: "System Design", level: 92 },
  { name: "Cloud Deployment", level: 91 },
  { name: "Automation", level: 95 },
  { name: "Trading Systems", level: 90 },
  { name: "Cloud & DevOps", level: 89 },
];
