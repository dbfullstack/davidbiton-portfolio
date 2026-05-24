# davidbiton-portfolio

Personal portfolio site — single-page, dark, fast.

## Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub, then import on [vercel.com](https://vercel.com). Zero config.

Recommended custom domain: `davidbiton.dev`.

## Structure

```
app/
  layout.tsx       # html shell + font loading + metadata
  page.tsx         # composes the sections
  globals.css      # Tailwind v4 + theme tokens
components/
  Header.tsx
  Hero.tsx
  About.tsx        # bio + stats grid
  CaseStudies.tsx  # 6 case study cards (edit array to change)
  Stack.tsx        # tech chips by category
  Contact.tsx      # email / LinkedIn / GitHub links
  Footer.tsx
```

## Editing content

- **Case studies** — edit the `cases` array in [components/CaseStudies.tsx](components/CaseStudies.tsx)
- **Stack chips** — edit the `groups` array in [components/Stack.tsx](components/Stack.tsx)
- **Contact channels** — edit the `channels` array in [components/Contact.tsx](components/Contact.tsx)
- **Bio + stats** — edit [components/About.tsx](components/About.tsx)
- **Hero copy + CTAs** — edit [components/Hero.tsx](components/Hero.tsx)

## Design tokens

All colors live as CSS variables in [app/globals.css](app/globals.css) under `@theme`. Change `--color-accent` once to re-skin the entire site.
