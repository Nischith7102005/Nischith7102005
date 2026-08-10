# Nischith R — Portfolio

Clean, minimal portfolio for **Nischith R** — Business Operations, Supply Chain, Technology Management.

B.Tech Computer Science & Technology, Dayananda Sagar University, Bengaluru. CGPA 8.13 / 10, graduation 2027.

## Live sections

- Hero — headline, location, availability, contact CTAs
- About — business-first narrative + operating principles
- Projects — 6 curated projects (after removal of 4 requested)
- Experience — Humans Care Foundation internship
- Skills — grouped by Business/Data/Cloud/AI/Research
- Education — DSU details
- Certifications — AWS, IBM, Forage, etc.
- Career Interests — where impact is intended
- Contact — email, LinkedIn, GitHub

## Projects included (after filter)

1. CertiSure — secure credential verification
2. GreenMind — smart greenhouse / IoT + AI
3. Monitr-AI — LLM observability & Cognitive Waste Index
4. PsyMap — mind brain map visualization
5. LaTeX Plagiarism Suite — browser-only LaTeX tooling
6. Living Dataset — synthetic data evolution

Removed per request: AbyssLink, Séance Search, KeyHound 2.0, Excel File Validator.

## Stack

- Next.js 15 (App Router, static export)
- React 19
- Tailwind CSS 3.4
- TypeScript
- No heavy client libs — no `framer-motion`, no `three`, no `lucide-react` at runtime

## Getting started

```bash
npm install
npm run dev
```

Build static export:

```bash
npm run build
# output in /out
```

## Design principles

- Restrained palette: white, zinc-900, muted grays, border gray — 2-3 colors max
- Solid backgrounds, no gradients, no glassmorphism, no blobs
- 8px spacing system, consistent 10px border radius, minimal shadows only on hover
- Typography: system sans stack (Inter fallback), JetBrains Mono for labels — 400/500/600 weights
- Subtle transitions 200ms, no page-load delays
- Semantic HTML, keyboard focus visible, high contrast (>= 4.5:1), ARIA where needed

## Performance

- First Load JS ~115 kB (vs ~400kB+ before with three.js + framer-motion)
- Static export, no client-side WebGL
- No external font blocking at build time

## Structure

```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    icon.svg
  components/
    Navbar.tsx
    Footer.tsx
    sections/   Hero, About, Projects, Experience, Skills, Education, Certifications, CareerInterests, Contact
    shared/     SectionHeading
  lib/
    data.ts     content source
    utils.ts    cn helper
```
