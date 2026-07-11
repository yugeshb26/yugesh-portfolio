# Yugesh B — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Status: MVP

This is phase 1 of a scoped build — see "What's not here yet" below before assuming a section is missing by accident.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4, `next-themes` (light / dark / system)
- **Animation:** Framer Motion (scroll reveals, typing effect, animated counters)
- **Icons:** Lucide React + two hand-rolled SVGs for GitHub/LinkedIn (lucide dropped brand icons in this version)
- **Content:** Fully data-driven — every section reads from `src/lib/data.ts`

## Updating content

Everything — experience, skills, projects, certifications, profile bio — lives in **`src/lib/data.ts`**. Edit that file and the whole site updates; no component changes needed.

To swap the resume: replace `public/resume.pdf`.
To swap a project's PDF overview: replace the matching file in `public/docs/`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it at https://vercel.com/new.
3. No environment variables are required for the current build.
4. Deploy — Next.js App Router projects work out of the box on Vercel.

For Netlify or GitHub Pages, this needs `output: "export"` in `next.config.ts` if you want a fully static export (note: the contact form and theme toggle are client components and work fine with static export; nothing here requires a Node server).

## What's not here yet (by design)

Scoped out of this MVP pass, to keep quality high on what *is* built rather than shipping 40 shallow features:

- Blog engine
- Analytics (GA4 / Clarity) wiring
- GitHub contribution heatmap
- Command palette (Ctrl+K)
- Three.js particle scenes (kept to a subtle CSS/Framer gradient background instead)
- Real testimonials (placeholder "coming soon" cards are in `Testimonials` — replace with real quotes when available)
- Certificate credential links/images (cards exist in `Certifications`, marked "coming soon")
- A professional photo in the hero (currently an initials avatar)

Each of these can be layered on top of the current structure without a rewrite.

## Known content gaps

- `Thurro` role bullets are intentionally generic — the resume doesn't yet have specific achievements listed for this role (started Dec 2025). Update `src/lib/data.ts` once you have concrete wins to point to.
