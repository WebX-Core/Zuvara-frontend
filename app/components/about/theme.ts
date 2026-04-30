import { babyCareListingTheme, colors } from "@/lib/tokens";

export type AboutPalette = {
  accent: string;
  accentSoft: string;
  border: string;
  chip: string;
  panel: string;
  page: string;
  ink: string;
  body: string;
};

export const aboutPalette: AboutPalette = {
  accent: babyCareListingTheme.accent,
  accentSoft: babyCareListingTheme.accentSoft,
  border: babyCareListingTheme.border,
  chip: colors.baby.chip,
  panel: colors.baby.panel,
  page: colors.baby.page,
  ink: colors.baby.ink,
  body: colors.baby.body,
};
