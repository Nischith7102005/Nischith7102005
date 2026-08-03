# Nischith R — Portfolio

A premium, recruiter-focused personal portfolio for **Nischith R**, positioned around
**Business Operations · Supply Chain · Technology Management**.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

## Highlights

- Minimal, elegant, agency-quality dark theme with optional light mode
- Smooth scrolling and subtle Framer Motion reveal animations
- Plain, statement-first cards (no decorative icon clutter), timeline layout, interactive project cards
- Fully responsive, SEO-optimized, and accessibility-conscious
- Single-page sections: Hero, About, Education, Experience, Projects, Skills,
  Certifications, Career Interests, Contact

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
  public/images/         # hero + project imagery
  src/
    app/                 # layout, metadata, single-page entry
    components/
      sections/          # Hero, About, Education, Experience, Projects, Skills, Certs, Interests, Contact
      shared/            # Reveal, SectionHeading, ThemeToggle
      Navbar.tsx, Footer.tsx, ThemeProviders.tsx
    lib/                 # data.ts (all content), utils.ts
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

## Analytics

Visitor analytics uses your existing Firebase project (`portfolio-e8340`).
Once deployed, open the Firebase console → **Analytics** to see traffic in
real time.
