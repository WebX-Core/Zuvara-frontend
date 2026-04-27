/**
 * Zuvara Design Tokens
 *
 * Single source of truth for all brand color values.
 * These mirror the CSS custom properties in globals.css.
 *
 * Use these when you need a color value in a JS context
 * (inline styles, style props, canvas, etc.).
 * For Tailwind classes, use the utility names directly:
 *   bg-baby-accent, text-personal-accent, etc.
 */

// ─────────────────────────────────────────────
// COLOR TOKENS
// ─────────────────────────────────────────────

export const colors = {
  background: "#ffffff",

  baby: {
    accent:      "#45685e",
    accentSoft:  "#6d877f",
    border:      "#84aaa5",
    chip:        "#d7ebe8",
    panel:       "#edf5f1",
    page:        "#f7fbf8",
    hero:        "#f2f7f5",
    deco:        "#d3ebe7",
    divider:     "#cadaa9",
    ink:         "#1f2c28",
    body:        "#596963",
  },

  personal: {
    accent:      "#8200db",
    accentSoft:  "#a14ce8",
    accentMid:   "#9352bf",
    border:      "#c89cf1",
    chip:        "#f2e8ff",
    panel:       "#faf5ff",
    page:        "#fdfaff",
  },
} as const;

// ─────────────────────────────────────────────
// THEME PRESETS
// Used by product page hero sections via style props.
// ─────────────────────────────────────────────

export type ThemePreset = {
  /** Primary brand color — CTAs, headings, icons, check marks */
  accent: string;
  /** Page-level background tint */
  pageBg: string;
  /** Hero container card background */
  containerBg: string;
  /** Border color for nav buttons and input outlines */
  border: string;
  /** Category chip / tag fill */
  chipBg: string;
  /** Subtle section tint for feature rows */
  sectionTint: string;
};

export const babyCareTheme: ThemePreset = {
  accent:       colors.baby.accent,
  pageBg:       colors.baby.page,
  containerBg:  colors.baby.panel,
  border:       colors.baby.border,
  chipBg:       colors.baby.chip,
  sectionTint:  colors.baby.hero,
};

export const personalCareTheme: ThemePreset = {
  accent:       colors.personal.accent,
  pageBg:       colors.personal.page,
  containerBg:  colors.personal.panel,
  border:       colors.personal.border,
  chipBg:       colors.personal.chip,
  sectionTint:  colors.personal.page,
};

// ─────────────────────────────────────────────
// LISTING THEMES
// Used by product listing pages (grid/filter panels).
// ─────────────────────────────────────────────

export type ListingTheme = {
  accent: string;
  accentSoft: string;
  border: string;
  chipBg: string;
  panelBg: string;
  pageBg: string;
};

export const babyCareListingTheme: ListingTheme = {
  accent:     colors.baby.accent,
  accentSoft: colors.baby.accentSoft,
  border:     colors.baby.border,
  chipBg:     colors.baby.chip,
  panelBg:    colors.baby.panel,
  pageBg:     colors.baby.page,
};

export const personalCareListingTheme: ListingTheme = {
  accent:     colors.personal.accent,
  accentSoft: colors.personal.accentSoft,
  border:     colors.personal.border,
  chipBg:     colors.personal.chip,
  panelBg:    colors.personal.panel,
  pageBg:     colors.personal.page,
};

// ─────────────────────────────────────────────
// BORDER RADIUS SCALE
// Mirrors the --radius-* tokens in globals.css.
// ─────────────────────────────────────────────

export const radius = {
  pill:  "9999px",  // all CTAs, pill buttons          → rounded-pill
  card:  "2rem",    // structural section panels        → rounded-card
  modal: "1rem",    // elevated cards, modals, dropdowns → rounded-modal
  chip:  "0.75rem", // category chips, tags             → rounded-chip
  thumb: "0.5rem",  // small UI, thumbnails             → rounded-thumb
} as const;

// ─────────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────────

export const fonts = {
  primary:   "var(--font-cormorant)",   // Cormorant Garamond — display/hero
  secondary: "var(--font-montserrat)",  // Montserrat — body, UI, nav
  amatic:    "var(--font-amatic)",      // Amatic SC — decorative accents
  baby:      "BabyFont, sans-serif",    // Custom — Baby Care decorative
  cartoon:   "CinemaCartoon, sans-serif", // Custom — specialty decorative
} as const;

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

/** Convert a hex color to rgba with an alpha value */
export function hexToRgba(hex: string, alpha: number): string {
  const normalized = hex.replace("#", "");
  const full =
    normalized.length === 3
      ? normalized.split("").map((c) => c + c).join("")
      : normalized;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
