# Jhon — 3D Interactive Portfolio

A cinematic, single-page frontend portfolio built for **Week 2 — 3D Interactive Personal Portfolio** of the Internlytic front-end internship. The concept is **depth as navigation**: layered atmospheric panels, a tilted 3D identity card, and foreground/background layers that move at different speeds as you scroll.





## Sections

- **Home** — name, role, availability, short professional intro, primary CTAs, and a CSS 3D identity card.
- **About** — background, current learning goals, working style, strengths, and education.
- **Skills** — technologies I genuinely use, grouped as frontend, backend/data, and workflow.
- **Work** — four project cards with custom inline SVG cover art, descriptions, tech tags, and openable case notes.
- **Contact** — availability card, professional links, copy-to-clipboard email, and a client-side validated contact form.



## What makes it interactive

- **CSS 3D hero card** — the identity card sits on a perspective stage and tilts toward the pointer, with layered chips and orbit details translated in Z. No Three.js or 3D runtime is shipped.
- **Multi-speed parallax** — a single `useSceneMotion` hook publishes smoothed pointer values (`--mx`, `--my`), scroll offset (`--sy`), and page progress (`--scroll-progress`) on `<html>`. Background layers use different multipliers (`0.02`, `0.04`, `0.06`, `0.12`) so the foreground, grid floor, ghost type, and glow move at different depths.
- **Purposeful reveal motion** — an `IntersectionObserver` wrapper reveals sections once, with a short distance and optional stagger. Nothing loops in the reading column.
- **Tilt cards** — About, Skills, and Work cards respond subtly to a fine pointer. Touch devices skip the tilt entirely.
- **Project case dialogs** — native `<dialog>` elements provide free focus containment, Escape handling, and an inert background; an explicit Tab trap covers the browser gap where focus can reach the document.
- **Scroll-aware navigation** — the active section is highlighted while scrolling, and the reading progress bar is driven by `--scroll-progress`.
- **Reduced motion** — `prefers-reduced-motion` disables the marquee, tilts, parallax transforms, and smooth scrolling, and reveals content immediately.

```text
Pointer / scroll  ->  useSceneMotion  ->  CSS custom properties on <html>
                                           ->  hero layers, grid, orbs, ghost type
```
##
## Tech stack

- React 19 + TypeScript 6
- Vite 8
- Hand-written CSS (design tokens, 3D transforms, fluid `clamp()` type, media queries)
- Google Fonts: Instrument Serif + Manrope
- Inline SVG artwork and icons — no image carousels or heavy animation libraries

## Run locally

Requirements: Node.js 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

```bash
npm run build     # type-check and production build to dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Project structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── docs/                          # README preview images
├── public/
│   ├── favicon.svg
│   └── og-cover.jpg
├── src/
│   ├── assets/jhon-avatar.jpg
│   ├── components/                # Nav, Hero, sections, modal, controls
│   ├── data/                      # profile, education, skills, projects
│   ├── hooks/                     # scene motion, reduced motion, active section
│   ├── lib/focusTrap.ts
│   ├── styles/global.css          # tokens, layout, motion, responsive rules
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── vite.config.ts                 # base: './' for portable deploys
```

## Responsive and input coverage

- Fluid layouts tested at **320, 390, 768, 1024, 1440, and 1920 px** widths.
- No horizontal page overflow at those widths; decorative layers are clipped intentionally.
- Navigation collapses into a full-screen native dialog below 900 px, with 44 px controls.
- Project cards are click/tap targets with a full-card invisible button — no hover-only interaction.
- Contact fields use visible labels, inline errors, `aria-invalid`, `aria-describedby`, and focus the first invalid field on submit.
- Keyboards: skip link, visible focus styles, trapped dialog focus, Escape to close, focus returned to the card that opened the modal, and the same for the mobile menu.
- Touch targets for primary actions are at least 44 px; the email copy button is 40 × 40 px.

## Accessibility and performance notes

- Semantic landmarks (`header`, `nav`, `main`, five labelled sections, `footer`), one `h1`, and a heading hierarchy under it.
- Decorative layers, card artwork, icons, and the marquee are hidden from assistive technology.
- The contact form composes a `mailto:` draft entirely in the browser — no backend, tracking, or credentials.
- Accessibility was checked with a keyboard pass, an axe-core scan (WCAG 2.0/2.1 A + AA and best-practice rules) with **no violations** on the page, project dialog, or mobile menu, plus Playwright audits for names, anchors, images, heading order, focus behaviour, and overflow. This is not a formal WCAG audit.
- The page ships no bitmap artwork beyond the 28 KB avatar; project covers are inline SVG. Production bundle is about **82 KB gzipped JS** and **11 KB gzipped CSS**.
- Fonts are loaded from Google Fonts with `preconnect` and `display=swap`.

## Deployment

### GitHub Pages (workflow included)

1. Create an empty repository on GitHub and push this folder as the repository root.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually). `.github/workflows/deploy.yml` builds `dist/` and deploys it.
4. The site will be available at `https://<username>.github.io/<repository>/`.

`vite.config.ts` uses `base: './'`, so the same build works at a domain root or a repository subpath. This was verified by serving the production build from a `/week-02-portfolio/` subpath.

After the first deploy, replace the relative `og:image` and `twitter:image` values in `index.html` with the absolute URL, for example:

```html
<meta property="og:image" content="https://username.github.io/week-02-portfolio/og-cover.jpg" />
```

Social networks do not resolve relative preview image URLs.

### Vercel or Netlify

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22

## Content and limitations

- **Display name:** Jhon, as requested for this task. Email and GitHub point to the real professional profiles.
- **Privacy:** the street address and phone number were intentionally left off the public page. Only email, GitHub, and “Multan, Pakistan” are published.
- **Project links:** live demos and individual repositories for Fashion Store, Shopings, TCJ-Space, and MTAOM are not public yet. Each card opens a case-notes dialog, notes that links are pending, and offers a walkthrough by email rather than inventing URLs.
- **Contact form:** deliberately uses `mailto:` instead of a backend. If you add a form service later, keep credentials out of the frontend and validate on the server as well.
- **Avatar:** sourced from the GitHub profile attached to this project. Replace `src/assets/jhon-avatar.jpg` and the import in `src/data/profile.ts` if needed.




Built with React, TypeScript, and a lot of CSS. Week 2 submission, 2026.
