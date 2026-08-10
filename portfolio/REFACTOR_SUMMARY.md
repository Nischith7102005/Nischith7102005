# Portfolio Refactor — Summary

## Overview
Refactored portfolio to remove AI-template / "vibe coded" look and replace with clean, senior-engineer minimal design while preserving all original content (except 4 projects explicitly removed). Focus on restraint, readability, accessibility, and performance.

---

## 1. Major design decisions

### Color & theme
- **Restrained palette:** White background (#fff), foreground zinc-900 (#18181b), muted (#71717a), faint (#f9f9f9), border (#e4e4e7), strong border (#d4d4d8). No cream #E1E0CC hero, no black canvas. This reads as professional and prints well.
- **Light theme only:** Avoids dark-mode contrast issues and double maintenance; accessible contrast ratio > 7:1 for body text.
- **No gradients:** Removed all `bg-gradient-to-*`, noise overlays, pillar glows. Kept backgrounds solid.

### Typography
- Removed huge 13vw hero wordmark. New hero is 42–64px, 600 weight, tight tracking (-0.03em), 0.95 line-height — standard for senior portfolios.
- System font stack with Inter fallback via CSS variables, JetBrains Mono for eyebrow labels only. Proper hierarchy: eyebrow 11px uppercase mono, h2 28–42px semibold, body 14–17px.
- `text-balance` for headings, leading-relaxed for body, 60ch max-width for readability.

### Layout & spacing
- 8px system: container max-width 1120px, padding 24px (px-6 sm:px-8), vertical section padding 64px base / 80px sm / 96px md (py-16 sm:py-20 md:py-24). Consistent gap-4/6/8/12.
- Border radius consistent: 10px (cards), 12px (larger modules), 8px (inner chips), 9999 full (pills). No 1.25rem, 1.5rem randomness.
- Shadows only on hover: `0 4px 24px rgba(0,0,0,0.06)` with translateY(-1px) — subtle, meaningful.

### Components
- Broke large monolithic sections into small reusable primitives: `SectionHeading`, `Card` concept via class, `Container` pattern. No deeply nested JSX (>3 levels avoided).
- `Navbar`: sticky, border-b, backdrop-blur 12px, height 64px. Desktop: pill links with muted hover. Mobile: simple hamburger (3 spans) without framer-motion, overlay pushes content, locks body scroll, focusable. No animated pill that changes shape on scroll.
- `Footer`: minimal single row with name, location, email, GitHub/LinkedIn/back-to-top — no giant 11rem wordmark + secondary LightPillar.
- `Hero`: two-column grid — left copy + CTAs, right simple profile card with email/location/open-to. No LightPillar canvas, no double pillar, no parallax images. Includes stats inline (CGPA/graduation/focus) with border-t separation.
- Other sections: simple bordered cards, no inset shadows, no glowing top borders.

### Content
- Filtered projects in `data.ts`: removed AbyssLink, Séance Search (accented sé), KeyHound 2.0, Excel File Validator. Kept 6 remaining, split featured vs others. Also removed “Parallax” tag from GreenMind description to reduce vibe-coded buzzwords.
- Kept identity, about, experience, skills, education, certifications, career interests, but presentation simplified.

---

## 2. Removed effects / components

**Deleted files:**
- `src/components/LightPillar.tsx` (456 lines, Three.js shader, heavy)
- `src/components/LightPillar.css`
- `src/components/shared/Marquee.tsx` (infinite scrolling marquee, decorative)
- `src/components/shared/Reveal.tsx` (framer-motion wrapper, delayed y-translation)
- `src/components/ui/prisma-hero.tsx` (WordsPullUp, video background, massive motion)
- `src/components/ui/demo.tsx`
- `src/app/demo/page.tsx` (reference demo route)
- `preview.html` (21k static snapshot of old design)

**Removed dependencies:**
- `framer-motion` ^11.18.0
- `three` ^0.185.1
- `@types/three`
- `lucide-react` (not needed at runtime, replaced with text arrows)
- `next-themes`
- `serve`, `wrangler` (not needed for core build)

**Removed visual effects:**
- LightPillar WebGL shader (two overlapping canvases in Hero + Contact + Footer)
- Film-grain noise overlay (data URI SVG turbulence)
- Giant wordmark footers (clamp 12vw, 11vw) with low opacity
- Infinite marquee with gradient edge fades
- Framer Motion: initial y:-64 nav entrance, whileInView fades, AnimatePresence mobile menu, staggered card reveals (delay i*0.06), scale+blur pill chips, rotate animations on buttons
- Glowing borders: `shadow-[0_0_20px_rgba(225,224,204,0.15)]`, `backdrop-blur-2xl`, `bg-black/70`, pill morph on scroll
- Parallax stacking cards mention, sticky effects, GSAP references
- Arbitrary large radius: `rounded-b-[1.5rem]`, `rounded-[1.75rem]`, `rounded-[1.25rem]` inconsistently

---

## 3. UX improvements

- **Navigation:** Clear information architecture — 5 items in header (About, Projects, Experience, Skills, Contact) vs 8 previously. Sticky header with visible border on scroll gives wayfinding.
- **Hero:** Professional vs flashy — immediate value prop, not giant name. CTA hierarchy: primary (View projects) solid dark, secondary (Email) outline. Stats below fold separated by hairline, not overlapping pillar.
- **Projects:** Content over effects — title, tagline, description always visible; tags as muted pills; details hidden behind accessible disclosure button with `aria-expanded`, not animated height that caused layout shift. No more “0{index}” large circles and calendar icons that added noise.
- **Skills:** Removed tab switch + motion blur which required JS to scan. Now grid of categories, all skills visible at glance, hover border change only. Scannability improved: 5 cards, each list wraps.
- **Experience & Education:** Resume-like — bordered single card, period pill, company/role hierarchy with semibold headings, highlights as bullet list with small dot, border-t separation. Reads like PDF resume, not marketing card.
- **Certifications / Interests:** Simple 3-col grid, no hover background to #151515 that reduced contrast.
- **Contact:** No LightPillar inside contact that reduced text legibility. Now left: channel cards with hint + “Open →”, right: quick intro + timezone. Email CTA full width on mobile.
- **Accessibility:** Focus-visible outline 2px solid foreground, outline-offset 2px. Semantic `<header><nav><main><section><footer>`. Buttons have `aria-label`, `aria-expanded`. Color contrast meets WCAG AA (white bg, #111 fg, muted #71717a ~4.6:1 on white). Keyboard navigable hamburger. Reduced motion media query disables animations. Skip hidden decorative.
- **Responsive:** Tested fluid — container 1120 max, px-6 mobile, grids: sm:grid-cols-2, lg:grid-cols-3, hero lg:grid-cols-[1.1fr_0.9fr] that stacks on mobile. No fixed 100svh hero that caused scroll issues; hero now natural height py-12/20 with border-b.
- **Information density:** Increased whitespace, reduced visual noise, consistent vertical rhythm 64/80/96px, aligning to 8px grid.

---

## 4. Performance improvements

- **Bundle size:** First Load JS from ~400kB+ estimated (three 400kB + framer-motion ~70kB + lucide) to **115 kB** (Next.js 103kB shared + 12.1kB route). Three.js removed entirely.
- **No WebGL:** Removed three canvas instances (Hero had 2, Contact 1) that spawned WebGL contexts, shader compilation, RAF loops, resize listeners, and GPU memory. Now 0 RAF.
- **No motion runtime:** Removed framer-motion that added runtime and forced reflow on scroll. Transitions now pure CSS 200ms.
- **Fonts:** Removed `next/font` Google Fonts fetch that failed offline and blocked build; now system font stack (Inter fallback built into CSS var). No external render-blocking request, no FOUT, no `fonts.googleapis.com` dependency.
- **CSS:** Removed heavy data URI noise images (two copies of fractalNoise SVG ~1k each, but repeated). Globals now ~80 lines vs 134.
- **Static export still:** `output: export` retained, images unoptimized. Build now 2.4s vs 6-8s previously.
- **No extraneous demo routes:** Removed `/demo` that compiled extra page.
- **Removed `preview.html`** (21k) from bundle.
- **Package count:** Dependencies from 9 to 5, devDeps from 12 to 8. `package-lock` shrinks accordingly (303k to 220k).

---

## 5. Remaining areas for manual improvement (suggestions)

- **Images:** Add optimized project thumbnails (WebP, 800px) via `next/image` if you want visual anchor, but keep them static and lazy. Currently text-only for performance.
- **Resume PDF:** Add a link to downloadable PDF resume in Hero + Footer.
- **Analytics:** Add privacy-friendly analytics (Plausible, umami) via Script with `strategy: afterInteractive` — not included now to keep clean.
- **SEO content:** Add `json-ld` Person schema in layout for better search, and per-project structured data.
- **Dark mode:** If you want, implement via `prefers-color-scheme` media query only (no JS toggle) — define `--bg` dark tokens inside media query.
- **Language & copy:** Keep about paragraphs but consider adding one sentence on outcomes (e.g., “Improved sprint efficiency 20%” if you have metric) to strengthen experience.
- **Contact form:** Currently mailto — could add simple Formspree / API route with honeypot if you want inbound without exposing email, but mailto keeps it zero-JS.
- **Accessibility audit:** Run Lighthouse + axe DevTools; verify tab order for mobile menu (focus trap) — could add focus-trap-react minimal.
- **Testing:** Add a simple `npm run lint` CI in GitHub Actions that fails on unused vars (currently warnings for former NAV_PRIMARY etc. removed).
- **Content order:** Consider moving Skills above Experience if targeting ATS scanners — but current narrative order (About → Projects → Experience) is good for hiring managers.

---

Built with minimalism, intentional spacing, and professional hierarchy — no floating blobs, no glowing borders, no page-load delays.
