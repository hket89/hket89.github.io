# Next.js Migration Design

**Date:** 2026-06-08
**Status:** Approved

## Overview

Migrate the portfolio site from Vite + React SPA to Next.js 15 App Router with static export, hosted on GitHub Pages at https://hket89.github.io/. The migration is a 1-to-1 port — same design, same content, no new pages — with SEO improvements as the primary goal.

## Goals

- Pre-render static HTML so Google indexes real content (not a blank JS shell)
- Add core meta tags, Open Graph / Twitter cards, and JSON-LD structured data
- Keep the site on GitHub Pages with zero URL changes
- Preserve the existing terminal aesthetic and all MUI components

## Non-Goals

- New pages or sections (blog, case studies, etc.)
- Redesign
- Moving to Vercel
- sitemap.xml / robots.txt (not required for single-page site at this stage)

---

## Architecture

### Hosting

GitHub Pages via `peaceiris/actions-gh-pages`. Next.js is configured with `output: 'export'`, which writes fully static HTML/CSS/JS to `out/`. No server runtime is needed.

### Framework

Next.js 15, App Router. The site remains a single route (`/`).

---

## Project Structure

```
hket89.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← root layout: metadata, JSON-LD, ThemeRegistry, html/body
│   │   ├── page.tsx            ← home page (current App.tsx + 'use client' directive)
│   │   ├── theme-registry.tsx  ← MUI + Emotion SSR cache wrapper ('use client')
│   │   └── globals.css         ← minimal global reset (body margin, monospace font)
│   ├── content/
│   │   └── profile.ts          ← unchanged: all profile data
│   └── theme.ts                ← unchanged: MUI theme tokens
├── public/
│   ├── favicon.svg             ← unchanged
│   └── og.png                  ← static 1200×630 OG image (to be added manually)
├── next.config.ts
├── tsconfig.json               ← updated for Next.js
└── .github/workflows/deploy.yml
```

### Files removed

| File | Reason |
|------|--------|
| `index.html` | Vite HTML entry point |
| `vite.config.ts` | Vite config |
| `tsconfig.node.json` | Vite node tsconfig |
| `src/main.tsx` | Vite entry point |
| `src/index.tsx` | Vite entry point |
| `gh-pages` npm package | Replaced by GitHub Actions deploy step |

---

## SEO Implementation

All SEO lives in `src/app/layout.tsx`.

### Core metadata + Open Graph

Implemented via Next.js `Metadata` export — type-safe, co-located, zero runtime overhead:

```ts
export const metadata: Metadata = {
  title: 'Hong Ket Lo — Senior Software Engineer',
  description: '12+ years building scalable systems, cloud-native microservices, and AI-powered pipelines. Senior Software Engineer at SEEK.',
  metadataBase: new URL('https://hket89.github.io'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Hong Ket Lo — Senior Software Engineer',
    description: '12+ years building scalable systems, cloud-native microservices, and AI-powered pipelines.',
    url: 'https://hket89.github.io',
    siteName: "Hong Ket Lo's Portfolio",
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hong Ket Lo — Senior Software Engineer',
    description: '12+ years building scalable systems, cloud-native microservices, and AI-powered pipelines.',
    images: ['/og.png'],
  },
}
```

### JSON-LD structured data

Inline `<script type="application/ld+json">` in `layout.tsx` body. Uses `Person` + `WebSite` schemas:

```ts
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Hong Ket Lo',
      url: 'https://hket89.github.io',
      jobTitle: 'Senior Software Engineer',
      sameAs: [
        'https://github.com/hket89',
        'https://www.linkedin.com/in/hket89',
      ],
      knowsAbout: ['TypeScript', 'Python', 'AWS', 'LangGraph', 'RAG', 'MCP'],
    },
    {
      '@type': 'WebSite',
      name: "Hong Ket Lo's Portfolio",
      url: 'https://hket89.github.io',
    },
  ],
}
```

### OG image

Static file at `public/og.png` (1200×630). Dynamic OG image generation requires a server runtime and is not available with `output: 'export'`. The image must be added manually before the first deploy — a screenshot of the portfolio or a simple text card works well.

---

## MUI + App Router Setup

MUI uses Emotion for CSS-in-JS. Emotion's runtime style injection is incompatible with React Server Components, so a `ThemeRegistry` wrapper is required. This is MUI's official pattern for Next.js App Router.

### `src/app/theme-registry.tsx`

A `'use client'` component that:
1. Creates an Emotion cache with `key: 'mui'`
2. Intercepts style insertions and collects them
3. Uses `useServerInsertedHTML` to flush collected styles into the static HTML `<head>` during `next build`

This ensures styles are present in the pre-rendered HTML — no flash of unstyled content, and crawlers see fully styled markup.

### `src/app/layout.tsx`

Wraps `children` with `ThemeRegistry`. Structure:

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
```

### `src/app/page.tsx`

Current `App.tsx` content moved here with one addition — `'use client'` directive at the top, required because the command palette uses `useState` and `useEffect`.

---

## next.config.ts

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },  // required: Next.js image optimisation needs a server
  trailingSlash: true,            // generates index.html files, safer for GitHub Pages
}

export default nextConfig
```

---

## Deployment Pipeline

### package.json scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  }
}
```

`next build` runs type checking internally, so the separate `typecheck` pre-build step is removed from the build script (kept as a standalone script for IDE/CI use).

### Dependencies

**Add:**
- `next` (to dependencies)
- `@emotion/cache` (to dependencies — needed by ThemeRegistry)

**Remove:**
- `vite`, `@vitejs/plugin-react-swc` (devDependencies)
- `gh-pages` (devDependencies)

### GitHub Actions (`.github/workflows/deploy.yml`)

Two changes:

1. `publish_dir` changes from `./dist` to `./out`
2. `peaceiris/actions-gh-pages` automatically adds `.nojekyll` to the published branch — this is critical because Next.js exports assets inside `_next/` (underscore prefix), which GitHub's Jekyll processor would otherwise strip

No other workflow changes needed.

---

## Implementation Notes

- `@emotion/cache` must be added as an explicit dependency; it is a peer dep of `@emotion/react` but not always auto-installed
- `next-env.d.ts` is auto-generated by `next build` / `next dev` — do not commit it (add to `.gitignore`)
- `tsconfig.json` needs `"plugins": [{ "name": "next" }]` in `compilerOptions` and `"next-env.d.ts"` added to `include` — Next.js uses this for path aliases and type augmentation
- The `dist/` directory can be deleted once the migration is confirmed working; it is the old Vite build output
- Test locally with `next build && npx serve out` before pushing to confirm static export works end-to-end
