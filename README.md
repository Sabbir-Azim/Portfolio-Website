# Sabbir Azim - Portfolio

A recruiter-focused portfolio for a Generative AI Engineer specializing in agentic systems, real-time voice AI, retrieval-augmented generation and full-stack AI products.

## Technology

- Next.js 16, React 19 and TypeScript
- Tailwind CSS 4 with a custom responsive design system
- Vinext for Cloudflare-compatible production output
- Static portfolio data with typed project case studies

## Local setup

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Updating portfolio content

Most professional content is centralized in `app/data/portfolio.ts`:

- `profile`: name, title, contact details and professional links
- `experience`: roles, dates, impact statements and technologies
- `projects`: featured projects and their case-study content
- `skillGroups`: skills grouped by evidence-based capability
- `education` and `certificates`: academic and training details

Project pages are generated from the same `projects` array, so a content change updates both the home page and its case study.

Replace `public/Sabbir-Azim-Resume.pdf` to update the downloadable resume while keeping the filename unchanged. Replace `public/og-sabbir-azim.png` to update the social-sharing image.

## Site structure

- `/` - recruiter overview, experience, projects, skills, education and contact
- `/projects/supportly` - Supportly case study
- `/projects/travelsphere-ai` - TravelSphere AI case study
- `/projects/lunarkchat` - LunarkChat case study
- `/sitemap.xml` and `/robots.txt` - search engine discovery

## Contact form

The contact form validates required fields and opens a pre-addressed draft in the visitor's email client. It stores no personal data and requires no third-party form service. Replace this with a server-side provider if direct in-page delivery is needed later.

## Deployment

The project is configured for OpenAI Sites through `.openai/hosting.json`. Run a successful production build before creating and deploying a new saved version. The output remains Cloudflare Worker-compatible through the existing Vinext configuration.
