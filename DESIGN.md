# Design System — Zuvara

## 1. Visual Theme & Atmosphere

Zuvara is a dual-brand product site selling premium baby care and personal care products in Nepal. The visual language is warm, trustworthy, and nature-grounded — never clinical or sterile. The interface uses soft organic canvases, editorial serif headings paired with a clean geometric sans, and product photography given the dominant visual weight.

The site operates in two distinct brand gears that share a core structural grammar but diverge in color identity:

- **Baby Care mode** — mint-green and forest teal; soft, nurturing, nature-inspired. Botanical decorative elements (ferns, sunflowers, clouds) reinforce a safe, gentle atmosphere.
- **Personal Care mode** — electric violet/purple; confident, modern, vibrant. A bolder palette signals efficacy and adult empowerment.

Both modes share the same typography stack, layout grid, spacing system, and component geometry. The brand does not split into two unrelated systems — only the accent color family shifts.

**Key Characteristics:**
- Dual color-mode system: Baby Care teal (`#45685e`) vs Personal Care violet (`#8200db`) — one token swap, same structure
- Light organic canvases (mint-white, lavender-white) as primary surfaces; no heavy black hero chapters
- Cormorant Garamond (serif) for display/hero headlines; Montserrat (geometric sans) for all UI, body, and utility copy
- Rounded-full pill CTAs as primary action language; large-radius cards (`rounded-4xl`) as structural containers
- Product imagery centered on isolated, drop-shadowed pack shots against tinted backgrounds
- Glassmorphism accents: translucent nav (`bg-white/70 backdrop-blur-md`), decorative white/20 circles inside cards
- Wave SVG dividers and botanical illustrations as section transitions in Baby Care
- Lenis smooth scroll + Framer Motion reveals + GSAP for complex logo micro-interactions
- `max-w-7xl` centered content with `max-w-[90%]` for the navbar container

---

## 2. Color Palette & Roles

### Global CSS Tokens (`globals.css`)

| Token | Value | Role |
|-------|-------|------|
| `--background` | `#ffffff` | Root page background |
| `--foreground` | `#45685E` | Baby Care primary: text, icons, active states |
| `--secondary` | `#8cd700` | Lime accent (reserved, used sparingly) |
| `--divider` | `#cadaa9` | Soft sage dividers |
| `--babyCare` | `#BFDDCA` | Soft mint-green; Baby Care chip fills, hover surfaces, active nav highlights |
| `--personalCare` | `#8200db` | Electric violet; Personal Care accent across all UI |
| `--ternary` | `#9352bf` | Mid-violet; softer purple variant for hover/inactive states |

---

### Baby Care Palette

| Name | Hex | Role |
|------|-----|------|
| Forest Teal (accent) | `#45685e` | Primary CTA fill, icon color, active link underline, check marks |
| Teal Soft | `#6d877f` | Hover states, secondary icon color |
| Teal Border | `#84aaa5` | Input field borders, navigation borders |
| Mint Chip | `#d7ebe8` | Category chips, tag backgrounds |
| Mint Panel | `#edf5f1` | Product listing panels, card backgrounds |
| Mint Page | `#f7fbf8` | Page-level background for product listing |
| Hero Canvas | `#f2f7f5` | Baby Care hero section background |
| Cloud/Deco | `#d3ebe7` | SVG cloud shapes, decorative fills in hero |

### Personal Care Palette

| Name | Hex | Role |
|------|-----|------|
| Electric Violet (accent) | `#8200db` | Primary CTA fill, icon color, active link underline, check marks |
| Violet Soft | `#a14ce8` | Hover states, secondary variant |
| Violet Border | `#c89cf1` | Input field borders, chip outlines |
| Lavender Chip | `#f2e8ff` | Category chips, tag backgrounds |
| Lavender Panel | `#faf5ff` | Product listing panels, card backgrounds |
| Lavender Page | `#fdfaff` | Page-level background for product listing |

### Shared Neutrals

| Name | Value | Role |
|------|-------|------|
| White Canvas | `#ffffff` | Root background, sidebar, modal, search dropdown |
| zinc-50 | `#fafafa` | Hover surface on nav links, subtle card hover |
| zinc-100 | `#f4f4f5` | Search input background, image placeholder fill |
| zinc-200 | `#e4e4e7` | Navbar border-bottom, sidebar border |
| zinc-400 | `#a1a1aa` | Inactive icons in nav |
| zinc-500 | `#71717a` | Product meta, secondary labels |
| zinc-600 | `#52525b` | Body copy, descriptions |
| zinc-800 | `#27272a` | Sidebar menu links (inactive) |
| zinc-900 | `#18181b` | Primary text on light backgrounds |

### Overlay & Glassmorphism

| Value | Role |
|-------|------|
| `bg-white/70 backdrop-blur-md` | Desktop navbar background |
| `bg-white/80 backdrop-blur-md` | Mobile navbar background |
| `bg-white/20` | Decorative circle overlays inside product hero cards |
| `bg-white/70` | Prev/Next navigation buttons inside hero container |
| `bg-black/20 backdrop-blur-sm` | Mobile menu overlay backdrop |
| `drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]` | Product pack image shadow |

---

## 3. Typography Rules

### Font Families

| Variable | Family | Classification | Usage |
|----------|--------|----------------|-------|
| `--font-primary` / `--font-cormorant` | Cormorant Garamond | Serif — elegant, editorial | Hero headlines, major section display text |
| `--font-secondary` / `--font-montserrat` | Montserrat | Geometric sans-serif | Body, UI, navigation, buttons, meta labels |
| `--font-amatic` | Amatic SC | Casual hand-drawn | Decorative accents, playful callouts |
| `BabyFont` | Custom OTF | Rounded playful | Baby Care decorative typography (`.baby`) |
| `CinemaCartoon` | Custom OTF | Display cartoon | Specialty decorative use (`.CinemaCartoon`) |

Body default is **Montserrat** (`font-family: var(--font-montserrat)` on `body`).

### Hierarchy

| Role | Tailwind | Size | Weight | Notes |
|------|----------|------|--------|-------|
| Hero Display XL | `text-5xl` | 48px | 600 | Cormorant Garamond, `leading-[0.95] tracking-tight` |
| Hero Display L | `text-4xl sm:text-5xl` | 36–48px | 600 | Page hero headings |
| Section Heading | `text-2xl sm:text-4xl` | 24–36px | 600–700 | `md:font-bold`, product name in hero |
| Subhead / Label | `text-xl` or `text-lg` | 18–20px | 500–600 | Section intros, feature labels |
| Body Primary | `text-base` | 16px | 500 | `leading-7`, product descriptions |
| Body Secondary | `text-sm` | 14px | 400–500 | Supporting copy, nav links, metadata |
| Helper / Meta | `text-xs` | 12px | 400–600 | Category labels, breadcrumbs, `tracking-wide` |
| Micro UI | `text-[10px]` | 10px | 400–700 | Micro labels, `uppercase tracking-wider` section prefixes |

### Principles

- **Serif for emotion, sans for utility.** Cormorant Garamond brings warmth and trust to hero moments; Montserrat keeps the shopping and navigation layers clean and scannable.
- **Tight leading at display scale.** `leading-[0.95]` to `leading-[1.02]` on large headings creates a compact, deliberate editorial feel.
- **`tracking-tight` as standard at all headline sizes.** Loosened tracking only on small utility labels (`tracking-wide`, `tracking-wider`).
- **Weight ladder:** 600 (semibold) is the dominant emphasis weight for headings and CTAs. 700 (bold) reserved for product names at `md` breakpoint. 500 (medium) for body and supporting copy. 400 (regular) for secondary metadata.
- **Italic contrast.** Thin italic (`font-thin italic`) used selectively inside headlines for expressive contrast against semibold stems (e.g. "with *you*").
- **Antialiasing always on.** `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` applied globally.

---

## 4. Component Stylings

### Buttons

| Variant | Classes / Style | Use |
|---------|----------------|-----|
| Primary Fill | `rounded-full bg-[accent] text-white px-6 py-3 font-semibold hover:shadow-xl hover:scale-105` | Main CTA — "Explore Essentials", "Shop now", "Inquiry" |
| Outline | `rounded-full outline outline-[accent] text-[accent] px-6 py-3 font-medium hover:scale-105` | Secondary CTA — "Become a Distributor" |
| Ghost Border | `rounded-full border bg-white/70 px-5 py-2.5 font-medium hover:bg-white/20` + `borderColor: theme.border` | Prev/Next carousel navigation |
| Icon Button | `rounded-full hover:bg-zinc-100 py-2 transition` | Navbar hamburger, search toggle |

Accent color is context-aware: `#45685e` in Baby Care, `#8200db` in Personal Care. CTAs inherit the active section's accent via `theme.accent` or hardcoded values matching the section.

### Cards & Containers

- **Product Hero Container:** `rounded-4xl px-6 lg:px-10 pt-16 pb-8 md:h-100 md:transition-colors md:duration-500` with `backgroundColor: theme.containerBg` — animated color transition when product changes.
- **Decorative Orbs inside cards:** Three `rounded-full bg-white/20` circles (absolute positioned, pointer-events-none) for depth without shadow.
- **Search Dropdown:** `rounded-2xl shadow-xl border border-zinc-100 bg-white` — clean floating panel.
- **Product Thumbnail in Search:** `rounded-lg bg-zinc-100 size-10` — small square with contained product image.
- **Mobile Sidebar Menu:** `rounded-2xl` for the switch-section card; `rounded-lg` for individual nav links.

### Navbar

- **Desktop:** `fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200` — two-row layout (top bar + nav links). Max-width `max-w-[90%]`.
- **Mobile top bar:** `fixed top-0 w-full z-120 bg-white/80 backdrop-blur-md border-b border-zinc-200` — logo left, hamburger right.
- **Active link state:** `text-foreground border-b-2` (Baby Care) or `text-personalCare border-b-2` (Personal Care) — underline treatment, no background.
- **Active mobile link:** `bg-babyCare` (Baby Care) or `bg-personalCare/50 text-white` (Personal Care).
- **Hide-on-scroll behavior:** Framer Motion `y: -100, opacity: 0` on scroll down; restores on scroll up. Spring physics (`stiffness: 400, damping: 40`).

### Section Dividers

- **Wave SVG dividers** at the bottom of hero sections — white fill (`#ffffff`) waves layered on the mint canvas. Heights: 140px desktop, 97px tablet, 33px mobile.
- **Botanical decoratives:** Ferns, sunflowers (GIF), trees (SVG) — absolute positioned around the Baby Care hero. Purely presentational, `pointer-events-none`, `z-negative`.

### Image Treatment

- **Hero product pack:** Centered, `object-contain`, `drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]`. On desktop: absolute positioned above the hero container, overlapping it. On mobile: contained within a fixed-height block.
- **Framed video (Baby Care hero):** Inset within a decorative border PNG frame (`BORDERS.png`), `rounded-[60px]` overflow hidden inner clip. `autoPlay loop muted playsInline`.
- **Animated transitions between products:** `AnimatePresence mode="wait"` with `opacity + y + scale` — 0.35s duration.

### Modals

- `ContactIntentModal` receives `themeColor` prop (accent hex) to skin confirm buttons and highlights to match the active section.

---

## 5. Layout Principles

### Spacing System

Base unit is `4px` (Tailwind default). Most-used spacings:

- `gap-2` / `gap-3` / `gap-4` — tight component-level groupings
- `gap-8` / `gap-10` — section-level column gaps
- `px-4`, `px-6`, `lg:px-10` — horizontal section padding progression
- `py-8` / `py-12` / `py-16` — vertical section breathing room
- `mt-5`, `mt-8` — heading-to-body and body-to-CTA spacing

### Grid & Container

- **Max content width:** `max-w-7xl` (1280px) — centered with `mx-auto`
- **Navbar container:** `max-w-[90%]` — slightly wider than content to breathe edge-to-edge
- **Hero layout:** Single column on mobile, 3-column grid at desktop (`lg:grid-cols-[0.95fr_0.85fr_1.05fr]`) in Personal Care hero
- **Product listing:** Multi-column product grid transitioning to stacked single-column on mobile
- **Responsive breakpoints:** standard Tailwind (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`)

### Whitespace Philosophy

- **Organic breathing room at hero scale.** Full-viewport hero sections with generous vertical padding let the product imagery and headline hold center stage.
- **Compact density in product lists.** Cards tighten spacing and increase information density without breaking the brand feel.
- **Surface-change transitions.** Section breaks use background color changes (mint → white → lavender) as the primary separation device, not heavy dividers or ruled lines.

### Border Radius Scale

| Size | Usage |
|------|-------|
| `rounded-lg` (8px) | Small utility — thumbnail containers, nav link active state, search result rows |
| `rounded-xl` (12px) | Medium utility — category chips, mobile menu icon backgrounds |
| `rounded-2xl` (16px) | Elevated cards — search dropdown, mobile switch-section card, modals |
| `rounded-4xl` (~32px) | Large structural containers — product hero section card |
| `rounded-full` | All CTAs, pill buttons, nav icon buttons, carousel nav, avatar chips |

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 | Flat organic tinted canvases (`#f2f7f5`, `#f7fbf8`, `#fdfaff`) | Page and section backgrounds |
| Level 1 | Subtle `border-zinc-100` / `border-zinc-200` containment | Cards, sidebar, nav dividers |
| Level 2 | `shadow-xl` on hover | CTA button hover, search dropdown |
| Level 3 | `drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]` | Product pack photography — the strongest shadow in the system |
| Glassmorphism | `bg-white/70 backdrop-blur-md` | Navbar, floating buttons — atmospheric layering without full opacity |
| Decorative depth | `bg-white/20 rounded-full` orbs inside colored containers | Hero card interior depth without real elevation |
| Focus/Active | `text-[accent] border-b-2` | Nav active link; no box-shadow focus ring visible by convention |

Depth is intentionally light. The product photography and the color-tinted canvases do most of the visual separation work. Shadows appear only on hover and on the hero product image.

---

## 7. Dual-Mode System — Baby Care vs Personal Care

The site switches visual identity based on `activeSection` from `SectionProvider`. This is the most important architectural design decision.

| Property | Baby Care | Personal Care |
|----------|-----------|---------------|
| Accent | `#45685e` (forest teal) | `#8200db` (electric violet) |
| Page background | `#f2f7f5` → `#f7fbf8` | `#fdfaff` → `#faf5ff` |
| Panel / container | `#edf5f1` | `#faf5ff` |
| Chip fill | `#d7ebe8` | `#f2e8ff` |
| Border | `#84aaa5` | `#c89cf1` |
| Atmosphere | Nature, soft, nurturing | Vibrant, confident, modern |
| Decorative | Botanical SVGs, wave dividers | Bold color gradients, clean geometry |
| Logo | `logo.png` (green mark) | `logo_secondary.svg` (purple variant) |
| Nav icons | `text-foreground` (#45685e) | `text-personalCare` (#8200db) |

The switch is communicated via a tooltip (`Switch to Personal Care / Baby Care`) triggered on the `ri:exchange-line` icon in the navbar.

---

## 8. Do's and Don'ts

### Do
- Keep the Baby Care / Personal Care split to color tokens only — never diverge in layout, spacing, or component geometry.
- Use `rounded-full` pill geometry for all primary and secondary CTAs.
- Apply `hover:scale-105` and `hover:shadow-xl` together on filled CTAs for tactile feedback.
- Let the tinted organic canvas (`#f2f7f5` or `#fdfaff`) set the section mood; keep the actual product container at a subtly deeper tint.
- Use Cormorant Garamond only for hero/display moments — never for UI controls, navigation, or product metadata.
- Keep `drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]` as the signature depth treatment on product imagery.
- Apply `text-zinc-{n}` for all neutral text hierarchy — not custom hex grays.
- Animate between states with Framer Motion (`opacity`, `y`, `scale`); reserve GSAP for complex procedural sequences (logo tapping animation).

### Don't
- Don't introduce a third accent color family alongside teal and violet — it will break the dual-mode grammar.
- Don't use non-Tailwind shadows or glow effects on UI chrome. Glows are reserved for product imagery.
- Don't mix `font-primary` (Cormorant) into navigation, buttons, or body copy — it belongs strictly in display headings.
- Don't flatten all radii to one size. Maintain the scale: `rounded-lg` for small UI, `rounded-2xl` for cards, `rounded-4xl` for structural panels, `rounded-full` for pills.
- Don't use solid-color navbars. Always keep `backdrop-blur-md` on the navbar — it's a core atmospheric choice.
- Don't remove the wave SVG dividers from Baby Care hero sections — they are structural to the section rhythm, not decorative extras.
- Don't hardcode accent colors as arbitrary hex values in components — reference `theme.accent` or the CSS variable (`text-foreground`, `text-personalCare`) so the dual-mode system stays coherent.
- Don't add decorative gradients to UI chrome. Gradients appear only in the Personal Care hero right-panel (`bg-linear-to-b from-personalCare/90 ... to-personalCare/80`) and nowhere else.

---

## 9. Responsive Behavior

### Breakpoints (Tailwind defaults)

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Single-column hero, compact CTAs, mobile top nav + sidebar drawer |
| Small Tablet | 640px–767px | Hero image repositioned, wider text blocks |
| Tablet | 768px–1023px | Two-column product grids, wave SVG height reduced to 97px |
| Desktop | 1024px+ | Full 3-column hero grid, desktop navbar visible, sidebar hidden |

### Mobile Nav Pattern
- Top bar with logo + hamburger. Hamburger opens a right-slide drawer (`w-[70%]`, spring animation `x: "100%"→0`).
- Backdrop overlay `bg-black/20 backdrop-blur-sm`.
- Both Baby Care and Personal Care nav items adapt based on active section (irrelevant cross-section links hidden).

### Touch & Swipe
- Product hero supports horizontal swipe (`drag="x"`, `dragElastic: 0.22`, `dragSnapToOrigin`) to cycle products on mobile.
- Minimum swipe offset: `±50px` to trigger prev/next.

### Image Behavior
- Hero product pack: `sizes="(max-width: 1024px) 80vw, 22vw"` — generous mobile size, tight desktop float.
- On mobile the pack image is rendered inline in the hero flow; on desktop it is `absolute` and overlaps the tinted container from above.
- Wave SVG heights collapse: `140px` → `97px` → `33px` at desktop → tablet → mobile.

---

## 10. Agent Prompt Guide

### Quick Color Reference

**Baby Care:**
- Primary action: **Forest Teal** (`#45685e`)
- Soft accent: `#6d877f`
- Page bg: `#f2f7f5` (hero) / `#f7fbf8` (listing)
- Panel bg: `#edf5f1`
- Chip: `#d7ebe8`
- Border: `#84aaa5`

**Personal Care:**
- Primary action: **Electric Violet** (`#8200db`)
- Soft accent: `#a14ce8`
- Page bg: `#fdfaff` (hero) / `#faf5ff` (listing)
- Panel bg: `#faf5ff`
- Chip: `#f2e8ff`
- Border: `#c89cf1`

**Shared Neutrals:**
- Primary text: `zinc-900` (`#18181b`)
- Body text: `zinc-600` (`#52525b`)
- Secondary meta: `zinc-500` (`#71717a`)
- Inactive icon: `zinc-400` (`#a1a1aa`)
- Divider: `zinc-200` (`#e4e4e7`)

### Example Component Prompts

- "Build a Baby Care product card on `#edf5f1` with Cormorant Garamond 32px semibold headline, Montserrat 14px body, and a `rounded-full bg-[#45685e] text-white` CTA pill. Add `drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]` to the product image."
- "Design a Personal Care hero section: right panel `bg-linear-to-b from-[#8200db]/90 to-[#8200db]/80`, left panel on `#fdfaff`. Headline in Cormorant Garamond semibold, CTA `rounded-full bg-[#8200db]`."
- "Create a `rounded-4xl` product hero container with `backgroundColor: #edf5f1`, three `rounded-full bg-white/20` decorative orbs, and Montserrat body copy in `text-zinc-700`."
- "Compose a Zuvara navbar: `bg-white/70 backdrop-blur-md border-b border-zinc-200`, Zuvara logo centered, search and exchange icons right-aligned in `text-[#45685e]`. Active link gets `text-[#45685e] border-b-2`."
- "Generate a Baby Care section rhythm: mint hero canvas (`#f2f7f5`) with wave SVG divider → white product listing on `#f7fbf8` panels → `#edf5f1` product hero card."

### Iteration Guide

1. Lock the canvas tint first (`#f2f7f5` for Baby Care, `#fdfaff` for Personal Care) before placing any component.
2. Apply the accent (`#45685e` or `#8200db`) only to actionable elements and checked states — never as a background on large surfaces.
3. Set typography order: display headline in Cormorant Garamond → body in Montserrat medium → meta in Montserrat regular small.
4. Radius by component class: `rounded-full` for pills, `rounded-4xl` for section panels, `rounded-2xl` for elevated cards, `rounded-lg` for small UI.
5. Check the dual-mode by swapping accent + canvas — layout and spacing should require zero changes.
6. Product imagery shadow (`drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]`) should remain the deepest shadow anywhere on the page. Do not compete with heavier shadows elsewhere.

### Known Gaps

- Semantic status colors (error, success, warning) are not defined as design tokens. Use Tailwind defaults (`red-500`, `green-600`, `yellow-500`) if needed.
- `--secondary: #8cd700` (lime green) exists in CSS but has no documented role in current components — treat as reserved.
- Per-product `ThemePreset` values (accent, pageBg, containerBg, border, chipBg, sectionTint) for individual product pages are defined inline at the data layer, not yet extracted to a shared token file.
- Dark mode is not implemented. The system is light-only.
