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

## Deployment

Deploy the `portfolio` folder to [Vercel](https://vercel.com), Render, or Railway.
The project is a standard Next.js application and works out of the box.
