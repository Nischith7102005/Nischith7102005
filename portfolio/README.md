# Nischith R — Portfolio

A premium, recruiter-focused personal portfolio for **Nischith R**, positioned around
**Business Operations · Supply Chain · Technology Management**.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

## Highlights

- Minimal, elegant, agency-quality dark theme with optional light mode
- Smooth scrolling and subtle Framer Motion reveal animations
- Plain, statement-first cards (no decorative icon clutter), timeline layout, interactive project cards
- Fully responsive, SEO-optimized, and accessibility-conscious
- Single-page sections: Hero, About, Career Interests, Skills, Experience, Projects,
  Certifications, Education, Contact

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
      sections/          # Hero, About, Interests, Skills, Experience, Projects, Certs, Education, Contact
      shared/            # Reveal, SectionHeading, ThemeToggle
      Navbar.tsx, Footer.tsx, ThemeProviders.tsx
    lib/                 # data.ts (all content), utils.ts
```

## Customizing content

Edit `src/lib/data.ts` — all personal information, skills, projects, experience,
certifications, and education live there.

## Deployment — Cloudflare Pages

The site is a fully static export (`next build` outputs plain HTML/CSS/JS into
`out/` — no server required), so it deploys to **Cloudflare Pages** in two ways:

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
