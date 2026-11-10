---
name: frontend-ui-ux-design
description: >-
  Expert standard operating procedures, design principles, and guidelines for
  creating ultra-luxury, high-converting, and accessible Front-End UI & UX design
  for modern web applications.
---

# Front-End UI & UX Design Skill

This skill defines the technical, visual, and psychological standards required to design and build world-class user interfaces and experiences, with special emphasis on high-end luxury e-commerce and bespoke services.

---

## 1. Visual Hierarchy & Spatial Architecture

### Principles of Quiet Luxury
* **Spaciousness Over Density**: Luxury is defined by breathing room. Never crowd components. Use generous padding (`py-20` to `py-32` for desktop sections, `py-14` to `py-18` on mobile).
* **Asymmetry with Balance**: Pair full-bleed or wide editorial visuals with understated, left-aligned or centered typographic blocks.
* **Content Restraint**: Eliminate redundant buzzwords, robotic marketing jargon, and artificial badges. Let photography and clear specifications carry the prestige.

### Grid & Layout Rules
* **Max Container Width**: Standardize on `max-w-7xl` (1280px) for general content and `max-w-5xl` for focused inquiry flows.
* **Responsive Padding**: Always provide progressive horizontal padding: `px-4 sm:px-6 lg:px-8`.
* **Mobile-First Touch Architecture**:
  * Touch targets must measure at least 44×44px.
  * Provide a sticky mobile quick-action bottom bar on mobile screens (`lg:hidden fixed bottom-0`) for primary conversion actions.

---

## 2. Typography & Editorial Tone

### Font Pairings
* **Display / Headline Serif**: `Cormorant Garamond`, `Cinzel`, `Didot`, or `Playfair Display`.
  * Weight: Light (`300`) or Regular (`400`). Avoid heavy, bulky bold weights for luxury titles.
  * Line-height: Tight and elegant (`leading-[1.1]` to `leading-[1.2]`).
* **Body & Navigation Sans-Serif**: `Montserrat`, `Helvetica Neue`, or `Inter`.
  * Navigation / Uppercase Labels: `text-[10px]` to `text-[12px]`, `tracking-[0.25em]` to `tracking-[0.35em]`, uppercase.
  * Body Prose: `text-xs` to `text-sm`, `font-light`, `leading-relaxed`, color: `text-zinc-300` or `text-zinc-400`.

### Typographic Rules
* Never use loud, multi-color rainbow gradients. Prefer crisp, solid whites (`#ffffff`), soft warm ivories (`#f5f5f7`), and subtle monochrome metallics.
* Keep sentences concise, confident, and authentic. Replace robotic copy like "Innovative State-of-the-art Engine" with authentic craftsmanship phrasing like "Handcrafted on 47th Street" or "Solid 18K Gold & Certified Diamonds".

---

## 3. Color Palette & Materiality

* **Noir Base**: Deep, rich dark backgrounds (`#070709`, `#0a0a0c`, `#050507`) instead of flat pure gray.
* **Contrast & Borders**: Ultra-thin, delicate dividers (`border-white/10` or `border-white/15`). Avoid thick 2px borders.
* **Surface Treatments**: Glassmorphism with `backdrop-blur-md` and `bg-black/60` to `bg-black/80`.
* **Subtle Metallic Accents**: Use refined silver sheen or platinum tones (`#ffffff` to `#d4d4d8`).

---

## 4. Micro-Interactions & Interactive Components

* **Transitions**: Use smooth cubic transitions (`transition-all duration-300 ease-out`).
* **Hover States**:
  * Clean underline animations expanding from left to right (`group-hover:w-full`).
  * Gentle image scale-up on card hover (`group-hover:scale-105 duration-700 ease-out`).
  * Buttons: Invert contrast seamlessly (e.g., solid white button to slight off-white, or border outline to solid white fill).
* **Form Inputs**: Sleek minimalist dark inputs with subtle border highlights on focus (`focus:border-white focus:outline-none`).

---

## 5. SEO & Semantic HTML5 Standards

* **Semantic Tags**: Every page must utilize proper `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
* **Headings**: Strictly one `<h1>` per page, followed by logical `<h2>`, `<h3>` hierarchy.
* **Image Optimization**: All images must feature descriptive `alt` tags, explicit responsive `sizes`, and Next.js `<Image />` optimization.
* **Structured Data (JSON-LD)**: Embed complete schema.org markup:
  * `JewelryStore` / `LocalBusiness` with address, geo-coordinates, price range, opening hours, and telephone.
  * `BreadcrumbList` and `CollectionPage` schemas.
* **Hydration Safety**:
  * Add `suppressHydrationWarning` to `<html>`, `<body>`, and any `<button>` that might receive attributes from browser autofill extensions.
  * Ensure all buttons have explicit `type="button"` or `type="submit"`.

