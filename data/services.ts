import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "ai-development",
    title: "AI Development",
    description: "Custom AI features and models, from prompt-engineered integrations to models trained from scratch.",
    features: ["LLM integration", "Custom model training", "AI chatbots", "Fraud/anomaly detection"],
    pricingNote: "Scoped per project — contact for a quote",
  },
  {
    id: "fullstack-development",
    title: "Full Stack Development",
    description: "End-to-end SaaS and web application builds — architecture through deployment.",
    features: ["Next.js applications", "API design", "Database architecture", "Admin dashboards"],
    pricingNote: "Scoped per project — contact for a quote",
  },
  {
    id: "automation",
    title: "Automation Systems",
    description: "Workflow automation and API integrations that remove repetitive operational work.",
    features: ["Webhook-driven pipelines", "Business chatbots", "Cross-platform integrations"],
    pricingNote: "Scoped per project — contact for a quote",
  },
  {
    id: "trading-bots",
    title: "Trading Bots",
    description: "Algorithmic trading systems — analysis, signal generation, execution and risk management.",
    features: ["MT5/MQL5 execution", "Signal engines", "Risk & position sizing", "Telegram alerts"],
    pricingNote: "Scoped per project — contact for a quote",
  },
  {
    id: "api-development",
    title: "API Development",
    description: "Well-documented, production-grade REST APIs designed for real client integrations.",
    features: ["REST API design", "Authentication & rate limiting", "Documentation"],
    pricingNote: "Scoped per project — contact for a quote",
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "Architecture reviews, technical planning and hands-on guidance for AI-powered builds.",
    features: ["Architecture review", "Technical roadmap", "Hands-on pairing"],
    pricingNote: "Hourly — contact for availability",
  },
];
