import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "pulsewire",
    name: "PulseWire",
    tagline: "AI-Powered News Platform",
    category: "ai",
    description:
      "An AI-powered news ecosystem combining trusted journalism, intelligent summarization and community engagement.",
    gradient: "from-blue-500 via-purple-500 to-cyan-400",
    images: [{ src: "/images/projects/pulsewire.png", alt: "PulseWire news platform dashboard" }],
    techStack: ["Next.js", "Supabase", "Prisma", "Gemini API", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/cyrilsofdevpro",
    caseStudy: {
      overview:
        "PulseWire centralizes fragmented news consumption into a single AI-assisted reading experience — summarized, personalized and moderated.",
      problem:
        "People consume too much fragmented, low-trust news content spread across dozens of sources, with no reliable way to separate signal from noise.",
      research:
        "Studied existing news aggregators and community platforms to identify the gap between passive feeds and active, AI-assisted reading experiences.",
      planning:
        "Mapped the core loop — ingest, summarize, personalize, discuss — before writing any UI, to keep the data model (articles, authors, reactions) simple from day one.",
      architecture:
        "Next.js App Router frontend talking to a Supabase Postgres database via Prisma, with row-level security scoping author and admin permissions. Summarization runs through the Gemini API as an async job so publishing never blocks on model latency.",
      databaseDesign:
        "Core tables: articles, authors, categories, comments, reactions, and an admin moderation queue — normalized to keep author profiles and article metadata independently editable.",
      apiDesign:
        "REST route handlers for public reads, with a separate authenticated namespace for authoring and moderation actions, all validated with Zod schemas shared between client and server.",
      authentication:
        "Supabase Auth with role claims (reader / journalist / admin) enforced both at the database (RLS) and route-handler level.",
      frontend:
        "Server Components for feed rendering and SEO, client components only where interactivity (reactions, comments, admin controls) requires it.",
      backend:
        "Prisma-modeled Postgres schema with scheduled summarization jobs and a moderation queue for AI-flagged content.",
      deployment: "Deployed on Vercel with a Supabase-hosted Postgres instance.",
      challenges: [
        {
          title: "Keeping AI summaries trustworthy",
          description:
            "Early summaries occasionally dropped nuance from source articles. Solved by constraining the summarization prompt to extract rather than rephrase key claims, with a visible link back to the source.",
        },
        {
          title: "Real-time engagement at scale",
          description:
            "Comment and reaction counts needed to feel live without hammering the database. Solved with optimistic UI updates plus periodic reconciliation.",
        },
      ],
      lessonsLearned: [
        "Async AI jobs should never block the primary publishing path.",
        "Role-based RLS at the database layer catches bugs that route-level checks alone would miss.",
      ],
      performance:
        "Server-rendered feed pages with edge caching for anonymous reads; personalized feeds hydrate client-side after the shell loads.",
      futureImprovements: [
        "Fine-tune a smaller in-house summarization model to reduce third-party API dependency.",
        "Add a personalized push-notification layer for breaking stories.",
      ],
      results:
        "Consolidated reading, discussion and publishing into a single fast, responsive platform with role-based access and admin analytics.",
    },
  },
  {
    slug: "sofai",
    name: "SofAI",
    tagline: "LLM Built From Scratch",
    category: "ai",
    description:
      "A custom large language model trained and served from scratch — no external AI API calls, fully self-owned inference.",
    gradient: "from-purple-500 via-blue-500 to-cyan-400",
    images: [{ src: "/images/projects/sofai.png", alt: "SofAI AI Studio chat workspace" }],
    techStack: ["Python", "PyTorch", "Custom Transformer", "Tokenizer", "React", "Node.js"],
    featured: true,
    githubUrl: "https://github.com/cyrilsofdevpro",
    caseStudy: {
      overview:
        "SofAI is a transformer-based language model designed, trained and served entirely in-house — from tokenizer to inference server — with zero dependency on third-party AI APIs.",
      aiAgent:
        "SofAI includes an AI agent in its AI Studio workspace to help users plan and build AI systems, prepare training data, guide model training, and iterate on results. It brings practical model-building assistance into the same space as the self-hosted LLM rather than limiting the product to a chat interface.",
      problem:
        "Relying on third-party AI APIs means no control over model behavior, ongoing per-token cost, and sending data to infrastructure you don't own.",
      research:
        "Reviewed transformer architecture papers and existing open tokenizer implementations to scope a training pipeline that was realistic to build and run solo.",
      planning:
        "Started with a small parameter count to validate the full pipeline — tokenizer, data loader, training loop, checkpointing, inference server — before scaling up.",
      architecture:
        "A custom decoder-only transformer trained with PyTorch, served through a lightweight inference API that the Next.js-based workspace calls directly — no OpenAI, Claude, or Groq calls anywhere in the stack.",
      backend:
        "Python training pipeline with checkpointed runs, plus a small inference server exposing a REST endpoint consumed by the frontend workspace.",
      frontend: "React/Node.js workspace for chat and document interaction with the self-hosted model.",
      deployment: "Model served from owned infrastructure rather than a managed AI API provider.",
      challenges: [
        {
          title: "Training stability",
          description:
            "Early training runs were unstable at higher learning rates. Solved with learning-rate warmup and gradient clipping tuned through iterative experiments.",
        },
        {
          title: "Inference latency without a managed API",
          description:
            "Self-hosted inference meant no third-party auto-scaling. Addressed with batching and a request queue to keep response times predictable under load.",
        },
      ],
      lessonsLearned: [
        "Owning the full stack — tokenizer through inference — gives full control but shifts real engineering weight onto infrastructure and training stability, not just prompting.",
        "Small-scale validation runs before scaling parameters saves enormous debugging time later.",
      ],
      futureImprovements: [
        "Scale parameter count with more training compute.",
        "Add fine-tuning support for task-specific behavior.",
      ],
      results:
        "A fully self-owned LLM stack — from tokenizer to inference — with no dependency on or cost from external AI providers.",
    },
  },
  {
    slug: "sof-stake",
    name: "SofStake",
    tagline: "Gaming, Rewards & Mining Hub",
    category: "web",
    description:
      "A unified gaming experience bringing sports, casino favorites, crash games and a reward-driven mining hub together.",
    gradient: "from-purple-500 via-blue-500 to-cyan-400",
    images: [{ src: "/images/projects/sofstake.png", alt: "SofStake gaming and rewards platform" }],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    featured: true,
    caseStudy: {
      overview:
        "SofStake brings live sports, casino games, crash games and a reward-driven mining hub into one gaming experience, with account, wallet and activity information presented in a single interface.",
      problem:
        "Combining different kinds of games and rewards can make navigation and account activity feel fragmented. SofStake brings these experiences together around a clear home dashboard.",
      architecture:
        "The interface is organized around game discovery, live odds, account balance, tournaments and mining activity, giving players a consistent place to move between the platform's core areas.",
      frontend:
        "A responsive dashboard pairs clear navigation with focused panels for wallet activity, live odds, tournaments and rewards, keeping key status visible without crowding the game experience.",
      challenges: [
        {
          title: "Making a broad platform easy to scan",
          description:
            "Sports, casino, crash games and mining each have different information needs. The dashboard separates those areas while keeping wallet and reward status easy to find.",
        },
      ],
      lessonsLearned: [
        "A consistent account and navigation model helps users move between very different product areas.",
        "Financial and reward information should be clearly labeled and easy to verify.",
      ],
      futureImprovements: [
        "Add clearer responsible-play controls and account activity summaries.",
        "Improve accessibility and performance across lower-powered mobile devices.",
      ],
      results:
        "A single interface for gaming, wallet visibility and reward features, designed to keep the experience cohesive across product areas.",
    },
  },
  {
    slug: "sofai-fx-bot",
    name: "SofAI FX Bot",
    tagline: "AI Forex Trading Platform",
    category: "trading",
    description:
      "An AI-powered forex trading system covering market analysis, signal generation and automated execution.",
    gradient: "from-cyan-400 via-purple-500 to-blue-500",
    images: [
      { src: "/images/projects/sofai-fx-bot.jpg", alt: "SofAI FX Bot signals and analysis dashboard" },
      { src: "/images/projects/fx-development-site.png", alt: "Algorithmic trading development website" },
    ],
    techStack: ["Python", "MQL5", "MetaTrader 5", "Telegram API"],
    featured: true,
    githubUrl: "https://github.com/cyrilsofdevpro",
    caseStudy: {
      overview:
        "A signal-to-execution pipeline for forex trading, combining a weighted technical scoring engine with automated, risk-controlled order execution.",
      problem:
        "Manual chart analysis and execution introduces lag and emotional error into trading decisions.",
      research:
        "Backtested combinations of RSI, moving averages and support/resistance levels to find a weighting scheme with a favorable risk-adjusted signal quality.",
      architecture:
        "An MQL5 execution layer inside MetaTrader 5, fed by a Python-based analysis engine that scores incoming price action against the weighted indicator model before any order is placed.",
      backend:
        "Signal engine with weighted indicator scoring, a position-sizing module tied to account risk percentage, and a Telegram bot for trade alerts.",
      challenges: [
        {
          title: "False signals in choppy markets",
          description:
            "Indicator-only signals produced too many false positives in low-volatility ranges. Solved by adding a volatility filter that suppresses signal generation below a threshold.",
        },
        {
          title: "Risk control under execution latency",
          description:
            "Market orders could slip during high-impact news. Addressed with pre-trade validation that rejects entries outside an acceptable slippage band.",
        },
      ],
      lessonsLearned: [
        "Position sizing tied to account risk, not fixed lot size, is non-negotiable for a system that runs unattended.",
        "A trade validation layer between signal and execution catches most of what backtesting alone won't.",
      ],
      futureImprovements: [
        "Add a walk-forward optimization pipeline for the indicator weights.",
        "Expand from XAUUSD to a multi-pair portfolio with correlation-aware risk limits.",
      ],
      results:
        "Automated the full signal-to-execution pipeline with built-in trade validation, position sizing and risk limits.",
    },
  },
  {
    slug: "ai-support-platform",
    name: "AI Support Platform",
    tagline: "Customer Support, AI-Assisted",
    category: "ai",
    description:
      "A customer support platform combining live chat, AI-generated responses and ticket management.",
    gradient: "from-blue-500 via-cyan-400 to-purple-500",
    techStack: ["Next.js", "Flask", "PostgreSQL", "Claude API"],
    featured: false,
    githubUrl: "https://github.com/cyrilsofdevpro",
    caseStudy: {
      overview:
        "A support desk where AI drafts responses grounded in a knowledge base, with humans reviewing and handling anything the model shouldn't answer alone.",
      problem:
        "Support teams drown in repetitive tickets that delay responses to genuinely complex issues.",
      architecture:
        "Next.js frontend for agents and customers, a Flask service handling AI-drafted responses grounded in a searchable knowledge base, backed by PostgreSQL for tickets and conversation history.",
      backend: "Ticket routing, knowledge-base search, and an admin dashboard with response-quality metrics.",
      challenges: [
        {
          title: "Keeping AI drafts grounded",
          description:
            "Early drafts occasionally answered from general knowledge instead of the knowledge base. Solved by constraining generation to retrieved context only, with a visible 'unsure — escalate' fallback.",
        },
      ],
      lessonsLearned: [
        "A confident-sounding wrong answer is worse than an honest escalation — the fallback path matters as much as the happy path.",
      ],
      futureImprovements: ["Add multi-language support to the knowledge base and response generation."],
      results:
        "Reduced first-response time by routing common queries to AI while escalating edge cases to human agents.",
    },
  },
  {
    slug: "business-websites",
    name: "Business Websites",
    tagline: "Client Work",
    category: "web",
    description:
      "A showcase of restaurant, boutique, corporate and portfolio sites built for real clients.",
    gradient: "from-cyan-400 via-blue-500 to-purple-500",
    images: [{ src: "/images/projects/worknext.jpg", alt: "WorkNext careers and job-support website" }],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    featured: false,
    caseStudy: {
      overview:
        "Multiple production sites for small businesses, each built to its own brand and optimized for load speed and conversions.",
      problem:
        "Small businesses need fast, credible web presences without enterprise budgets or long build timelines.",
      architecture:
        "A shared, design-forward component base customized per client — Next.js for performance, Tailwind for rapid, consistent styling.",
      challenges: [
        {
          title: "Balancing reusability with per-client identity",
          description:
            "A fully shared template risked looking generic. Solved with a token-based design system (color, type, spacing) so each build stays visually distinct while sharing engineering.",
        },
      ],
      lessonsLearned: ["A good component base pays for itself after the second client project."],
      futureImprovements: ["Package the shared base into a proper internal starter kit."],
      results:
        "Delivered multiple production sites, each tailored to its brand and optimized for load speed and SEO.",
    },
  },
  {
    slug: "ai-automation-systems",
    name: "AI Automation Systems",
    tagline: "Workflow Automation",
    category: "automation",
    description:
      "A collection of automation solutions — workflow tools, chatbots and API integrations for business operations.",
    gradient: "from-purple-500 via-cyan-400 to-blue-500",
    techStack: ["Python", "Node.js", "REST APIs"],
    featured: false,
    caseStudy: {
      overview:
        "Custom automation scripts and chatbots connecting existing business tools via API to remove repetitive manual work.",
      problem: "Repetitive operational tasks consume time better spent on higher-value work.",
      architecture:
        "Lightweight Node.js/Python services triggered on schedules or webhooks, integrating directly with clients' existing tools rather than replacing them.",
      challenges: [
        {
          title: "Fragile third-party integrations",
          description:
            "Some client tools had undocumented or unstable APIs. Solved with defensive retry logic and alerting when an integration silently fails.",
        },
      ],
      lessonsLearned: ["Automation that fails silently is worse than no automation — alerting is not optional."],
      futureImprovements: ["Build a shared monitoring dashboard across all deployed automations."],
      results: "Removed hours of manual, repetitive work per week across multiple client operations.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
