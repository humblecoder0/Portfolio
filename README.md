# Asad Ahmed — Portfolio

A responsive portfolio built with Next.js 14, TypeScript, Tailwind CSS, and a custom editorial design.

## Run locally

Requires Node.js 18.18+.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Design

- Deep ink, cool white, and ice blue palette with sans-serif and editorial serif typography.
- A project-led hero, one featured project, and two supporting projects with screenshots of the actual websites.
- A text-led about section, compact expertise list, and high-contrast contact section.
- Mobile navigation with Escape dismissal, outside-click dismissal, active section tracking, and keyboard focus support.
- Server-rendered page content, optimized local images, self-hosted fonts through `next/font`, and CSS entrance animations that respect reduced-motion preferences.

## Editing

| Content                                                          | Location           |
| ---------------------------------------------------------------- | ------------------ |
| Profile, biography, email, project details, skills, social links | `lib/content.ts`   |
| Project previews and hero artwork                                | `public/projects/` |
| Page composition                                                 | `app/page.tsx`     |
| Layout, colors, typography, responsive breakpoints               | `app/globals.css`  |
| Fonts and metadata                                               | `app/layout.tsx`   |
| Individual sections and display copy                             | `components/`      |
| Favicon                                                          | `app/icon.svg`     |

The hero uses Aurelion artwork; if you replace the featured project, update the hero artwork and title treatment in `components/Hero.tsx` too. The project screenshots are static previews captured from the linked websites; recapture them when the projects change. Image descriptions are in `lib/content.ts`.

Before deploying, replace `site.url` (currently `https://example.com`) in `lib/content.ts` with your portfolio’s real domain. Verify your bio, availability, and project dates are current.

## Deploy

Import the repository into Vercel; Next.js is detected automatically. Use `npm run build` to validate a production build before deployment.
