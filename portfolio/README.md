# Nischith R — Portfolio

A recruiter-focused personal portfolio for **Nischith R**, positioned around
**Business Operations · Supply Chain · Technology Management**, rebuilt in the
aesthetic of the **Prisma** hero design: near-black canvas, warm cream
(`#E1E0CC`) ink, film-grain noise, giant condensed headlines, pill navigation,
and pill CTAs with arrow circles.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Framer
Motion, and the standard **shadcn project structure** (`src/components/ui`,
CSS-variable theming, `cn()` helper, `components.json`).

## Stack & shadcn support

This project supports the shadcn conventions out of the box:

- **TypeScript** — `tsconfig.json` with the `@/*` → `./src/*` path alias.
- **Tailwind CSS** — `tailwind.config.ts` with `hsl(var(--…))` CSS-variable
  tokens defined in `src/app/globals.css` (shadcn's theming approach).
- **`cn()` helper** — `src/lib/utils.ts` (`clsx` + `tailwind-merge`).
- **`components.json`** — present at the project root, so the shadcn CLI works
  directly:

  ```bash
  npx shadcn@latest add button card input
  ```

  The CLI will place new components into `src/components/ui` (the `ui` alias
  in `components.json`).

### Why `src/components/ui`?

`components.json` maps `@/components/ui` to `src/components/ui`. The shadcn
CLI **and** every third-party shadcn-style component (like `prisma-hero.tsx`)
expect that exact folder, because:

1. It is the convention the shadcn registry generates code against — components
   ship with imports like `@/components/ui/prisma-hero` baked in.
2. It keeps reusable primitives in one discoverable place, separate from
   page-specific components (`src/components/sections`, `src/components/shared`).
3. Aliases in `tsconfig.json`/`components.json` must match, or pasted components
   won't resolve their imports.

So: keep reusable/ui components in `src/components/ui`, and don't rename the
folder or the alias.

## Integrated component: `prisma-hero`

- `src/components/ui/prisma-hero.tsx` — the `PrismaHero` component (plus the
  exported `WordsPullUp` and `WordsPullUpMultiStyle` animation primitives),
  copied verbatim from the design reference. It needs `"use client"` because it
  uses React hooks (`useRef`, `useInView`) and Framer Motion — required in the
  Next.js App Router.
- `src/components/ui/demo.tsx` — `DemoOne`, the reference demo.
- `src/app/demo/page.tsx` — live preview of the raw component at `/demo`
  (delete this route when you no longer need it).

**Dependencies used by the component:**

```bash
npm install lucide-react framer-motion
```

(Both are already in `package.json`.)

The rest of the portfolio reuses the component's design language — the hero
(`src/components/sections/Hero.tsx`) drives its headline through the exported
`WordsPullUp` component, with the same noise overlay, gradient, and pill CTA.

**Assets:**

- Hero background: the component's Cloudflare video URL, with an Unsplash
  poster + automatic image fallback (`onError`) so the hero never renders
  empty. Swap `HERO_FALLBACK` in `Hero.tsx` for any image you prefer.
- Project cards keep local images in `public/images/`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Structure

```
portfolio/
  components.json          # shadcn CLI config (ui alias → src/components/ui)
  public/images/           # project imagery
  src/
    app/                   # layout, metadata, single-page entry, /demo route
    components/
      ui/                  # shadcn ui components (prisma-hero, demo)
      sections/            # Hero, About, Education, Experience, Projects, Skills, Certs, Interests, Contact
      shared/              # Reveal, SectionHeading, Marquee
      Navbar.tsx, Footer.tsx
    lib/                   # data.ts (all content), utils.ts
```

## Customizing content

Edit `src/lib/data.ts` — all personal information, skills, projects, experience,
certifications, and education live there.

## Deployment

The site is a fully static export (`next build` outputs plain HTML/CSS/JS into
`out/` — no server required), so it deploys anywhere static hosting is offered:
**Vercel**, **Cloudflare Pages**, Netlify, GitHub Pages, etc.

## Deploying to Vercel

`vercel.json` in this folder configures caching headers and explicit build command for Vercel.

> **Important note on Output Directory:** When deploying a Next.js project to Vercel, Vercel's build pipeline (`@vercel/next`) automatically detects `output: "export"` and reads `routes-manifest.json` and build metadata from Next.js's default distribution directory (`.next`). Do **not** set **Output Directory** to `out` in `vercel.json` or in the Vercel dashboard — leave it at the Vercel/Next.js default (`.next`), otherwise Vercel will fail with `Error: The file ".../out/routes-manifest.json" couldn't be found`.

### Git integration (recommended)

1. In Vercel: **Add New → Project → Import** this GitHub repo.
2. Set **Root Directory** to `portfolio` (Vercel detects the Next.js project
   there automatically).
3. Ensure **Build Command** is `npm run build` and **Output Directory** is left at default (`.next`, do not override to `out`).
4. Deploy.

Every push to the connected branch deploys automatically.

### CLI

```bash
npx vercel --cwd portfolio          # preview
npx vercel --cwd portfolio --prod   # production
```

Requires `VERCEL_TOKEN` (or `vercel login`) in CI.

### What the config does

- `vercel.json` — sets `buildCommand: npm run build` and long-lived immutable
  `Cache-Control` headers for `/images/*` and `/_next/static/*` (matching the
  Cloudflare Pages `_headers` rules).
- `next.config.ts` — `output: "export"` produces the static export automatically
  detected by Vercel's Next.js builder.

## Deploying to Cloudflare Pages

Two ways:

### Option A — Git integration (recommended)

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**,
pick this repo, then set:

- **Framework preset**: None (or Next.js)
- **Root directory**: `portfolio`
- **Build command**: `npm run build`
- **Build output directory**: `out`

Every push to the connected branch deploys automatically.

### Option B — Wrangler CLI (any CI/CD)

`wrangler.jsonc` in this folder configures wrangler as a **static Pages
project** (project name `portfolio`, output dir `out`). Deploy with the Pages
command — `wrangler deploy` will warn that Pages projects need it:

```bash
npm run deploy        # = npm run build && npx wrangler pages deploy out
```

If your Pages project has a different name in the dashboard, pass it explicitly:

```bash
npx wrangler pages deploy out --project-name <your-project-name>
```

Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` env vars in CI.

### What the config does

- `wrangler.jsonc` — pins the Pages project name (`portfolio`) and the build
  output directory (`out`).
- `public/_headers` — Cloudflare Pages headers: long-lived, immutable caching
  for hashed JS/CSS and images; `no-cache` for HTML.
- `next.config.ts` — `output: "export"` produces the static `out/` folder.

### Other hosts

Because the build is a pure static export, the `out/` folder can also be dropped
onto **Netlify**, **Vercel**, **GitHub Pages**, or **Firebase Hosting** with no
changes.
