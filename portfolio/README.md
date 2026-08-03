# Nischith R — Portfolio

A premium, recruiter-focused personal portfolio for **Nischith R**, positioned around
**Business Operations · Supply Chain · Technology Management**.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

## Highlights

- Minimal, elegant, agency-quality dark theme with optional light mode
- Glassmorphism used sparingly, smooth scrolling, subtle Framer Motion animations
- Animated counters, timeline layouts, skill cards with icons, interactive project cards
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
      shared/            # Reveal, Counter, SectionHeading, ThemeToggle
      Navbar.tsx, Footer.tsx, ThemeProviders.tsx
    lib/                 # data.ts (all content), utils.ts
```

## Customizing content

Edit `src/lib/data.ts` — all personal information, skills, projects, experience,
certifications, and education live there.

## Deployment — Firebase Hosting

The site is configured for **Firebase Hosting** as a fully static export
(`next build` outputs plain HTML/CSS/JS into `out/` — no server required).

### 1. Install the Firebase CLI (already a dev dependency)

```bash
npm install
```

### 2. Log in once

```bash
npx firebase login
```

This opens your browser to authorize Firebase with your Google account. It only
needs to be done once per machine.

### 3. Deploy

```bash
npm run deploy        # builds + deploys to production (portfolio-e8340)
```

Or get a shareable **preview URL** before going live:

```bash
npm run deploy:preview
```

### What the config does

- `firebase.json` — hosting config: serves the `out/` folder, sets long-lived
  cache headers for static assets, and rewrites all routes to `index.html`.
- `.firebaserc` — pins the deploy to the `portfolio-e8340` project.
- `src/lib/firebase.ts` + `FirebaseAnalytics.tsx` — initializes **Firebase
  Analytics** (measurementId `G-YC8H31YN9E`) in the browser to track visits.
  It silently no-ops where analytics is unavailable.

### Other hosts

Because the build is a pure static export, the `out/` folder can also be dropped
onto **Netlify**, **Vercel**, **GitHub Pages**, or **Cloudflare Pages** with no
changes.

## Analytics

Visitor analytics uses your existing Firebase project (`portfolio-e8340`).
Once deployed, open the Firebase console → **Analytics** to see traffic in
real time.
