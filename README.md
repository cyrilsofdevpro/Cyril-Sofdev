# Cyril Sofdev — Portfolio v2

A production-grade personal engineering portfolio built with Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS, Framer Motion, React Three Fiber and shadcn/ui-style primitives.

## What's included in this pass

- Full project scaffold and architecture (`app/`, `components/`, `lib/`, `hooks/`, `types/`, `data/`, `prisma/`)
- Landing page: animated hero, typing text, Three.js particle background, stats, featured projects, testimonials, CTA
- About page: story timeline, mission/vision, values, education, skills, "now" section
- Experience page: professional timeline across four engineering roles
- Projects: list page with category filtering + full case-study detail pages for all 6 projects
- Services page with pricing placeholders
- Contact page: React Hook Form + Zod validated form, sends real email via Resend, honeypot + rate limiting
- GitHub page: **live** GitHub REST/GraphQL data (repos, stars, followers, contribution graph) — no fake numbers
- Dark/light theme via `next-themes`
- Command palette (⌘K) via `cmdk`
- Custom cursor, scroll progress bar, back-to-top, floating dock navigation
- Full SEO: Metadata API, Open Graph, Twitter cards, JSON-LD, `sitemap.ts`, `robots.ts`, `manifest.ts`
- Prisma schema ready for the CMS/admin dashboard phase (Messages, Projects, Posts, Testimonials, Timeline)

## Not yet built (next phase)

These require your own Supabase/Resend/GitHub credentials to build against safely, and are large
enough to warrant their own pass:

- **Blog** (MDX rendering, search, categories, syntax highlighting) — `content/` folder is scaffolded
- **Admin dashboard** (protected route, Supabase Auth, CRUD for projects/posts/testimonials/messages)
- **CMS wiring** — currently all content lives in `data/*.ts`; the dashboard would let you edit it
  through Prisma instead of editing code

## Getting started

```bash
npm install
cp .env.example .env
# fill in DATABASE_URL, NEXT_PUBLIC_SUPABASE_URL, RESEND_API_KEY, GITHUB_TOKEN, etc.
npm run dev
```

### Required environment variables

See `.env.example` for the full list. Minimum to get the site running locally:

- Nothing is strictly required for `npm run dev` — pages render with placeholder states if env vars
  are missing (e.g. the contact form logs to the console instead of sending email, and the GitHub
  page falls back to the public unauthenticated API).

To enable everything:

| Variable | Used for |
|---|---|
| `RESEND_API_KEY` | Sending real contact form emails |
| `GITHUB_TOKEN` | Raising GitHub API rate limits + enabling the contribution graph |
| `DATABASE_URL` / `DIRECT_URL` | Prisma/Postgres — needed once the CMS/dashboard phase is built |
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Auth for the future admin dashboard |

### Editing content

Everything the site displays lives in `data/*.ts`:

- `data/projects.ts` — all project cards and full case studies
- `data/skills.ts` — tech stack and skill percentages
- `data/timeline.ts` — story timeline, education, values
- `data/experience.ts` — professional experience roles
- `data/services.ts` — services offered
- `data/testimonials.ts` — testimonial placeholders (clearly marked — replace with real quotes)
- `data/socials.ts` — contact links (email, GitHub, X, WhatsApp)
- `data/navigation.ts` — nav + floating dock items

Changing one of these files updates the entire site — no other code changes needed for content edits.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — Vercel Analytics and Speed Insights are already wired in and activate automatically.

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · React Three Fiber · Three.js ·
Lucide Icons · next-themes · React Hook Form · Zod · Prisma · Supabase · Resend · cmdk ·
Vercel Analytics · Vercel Speed Insights
