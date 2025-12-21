# DayFlow – Smart Daily Planner (Web)

A modern, AI-inspired marketing site for the DayFlow Flutter app. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lucide icons, and next-themes for light/dark mode.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Features
- App Router + TypeScript + Tailwind v4
- Light/dark mode via `next-themes`
- Framer Motion micro-interactions
- Lucide icons, gradient accents, Material 3-inspired cards
- Responsive hero, features, media, how-it-works, stack, team, download, footer
- SEO metadata (OG/Twitter) set in `src/app/layout.tsx`

## Customize
- Replace screenshots in `public/` (e.g., `public/window.svg`) with real assets.
- Update links for GitHub, Play Store, App Store, and QR image in `src/app/page.tsx`.
- Adjust theme tokens and gradients in `src/app/globals.css`.

## Deploy
- Vercel: `npm run build` then push to a repo and import to Vercel.
- Netlify: `npm run build` with `next.config.ts` default; set output `next`.

## Lighthouse tips
- Use optimized images (Next.js `<Image>`), enable caching on CDN, keep embeds lazy.

## License
MIT (update as needed).
