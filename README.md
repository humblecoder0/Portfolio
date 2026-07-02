# Portfolio

A smooth, modern, dark-themed personal portfolio built with **Next.js (App
Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed for
polish and motion quality: staggered scroll reveals, a gentle entrance
animation, soft glows, hairline borders, and full `prefers-reduced-motion`
support. Deploys to Vercel with zero configuration.

## Features

- 🎨 True dark theme — layered near-blacks (`#0a0a0a`/`#0d0d0d`) with depth, a
  single restrained electric-blue accent, faint gradients and soft glows.
- ✨ Motion — first-load entrance, scroll-triggered fade/slide reveals with
  stagger, smooth anchor scrolling, quick (~200ms) hover transitions. All motion
  is disabled when the user prefers reduced motion.
- 📱 Fully responsive and mobile-first — looks great down to 375px.
- ♿ Accessible — semantic HTML, keyboard navigation, visible focus rings, a
  skip link, ARIA labels, and strong contrast.
- ⚡ Fast — optimized self-hosted Google Fonts via `next/font` (no layout
  shift), no images to ship, minimal JavaScript.

## Getting started

Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open **http://localhost:3000** in your browser. Edits hot-reload automatically.

### Other scripts

```bash
npm run build   # production build
npm start       # serve the production build locally
npm run lint     # run ESLint
```

## Making it yours

All of the site's content lives in one file — **`lib/content.ts`**. Edit it to
update your name, role, tagline, bio, projects, skills, and social links. You
don't need to touch any components.

| What you want to change          | Where                                            |
| -------------------------------- | ------------------------------------------------ |
| Name, role, tagline, bio, email  | `lib/content.ts` → `profile`                     |
| Projects (title, desc, link…)    | `lib/content.ts` → `projects`                    |
| Skills                           | `lib/content.ts` → `skills`                      |
| Social links                     | `lib/content.ts` → `socials`                     |
| Page `<title>` / SEO / OG        | `lib/content.ts` → `site`                        |
| Accent color                     | `tailwind.config.ts` → `colors.accent`           |
| Fonts                            | `app/layout.tsx`                                 |
| Global colors / background glow  | `app/globals.css`                                |
| Favicon                          | `app/icon.svg`                                   |

> **Tip:** after deploying, set `site.url` in `lib/content.ts` to your real
> domain so social/OG previews resolve correctly.

## Project structure

```
app/
  layout.tsx      # fonts, metadata, <html>/<body>, skip link
  page.tsx        # assembles the sections
  globals.css     # theme tokens, reduced-motion, focus styles
  icon.svg        # favicon
components/
  Nav.tsx         # fixed glassy nav with active-section tracking
  Hero.tsx        # headline + entrance animation + CTAs
  About.tsx       # bio + quick-facts card
  Projects.tsx    # responsive card grid with hover effects
  Skills.tsx      # grouped skill list
  Contact.tsx     # contact CTA + social links + footer
  SectionHeading.tsx
  Icons.tsx       # inline SVG icons
  motion/
    Reveal.tsx    # reusable scroll-reveal + stagger primitives
lib/
  content.ts      # ← all editable content lives here
```

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

That's it. Every push to your default branch redeploys automatically.

Prefer the CLI?

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## License

MIT — use it freely.
