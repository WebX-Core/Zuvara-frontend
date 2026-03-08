export type ThemePreset = {
  accent: string;
  pageBg: string;
  containerBg: string;
  border: string;
  chipBg: string;
  sectionTint: string;
};

export type PersonalCareListingTheme = {
  accent: string;
  accentSoft: string;
  border: string;
  chipBg: string;
  panelBg: string;
  pageBg: string;
};

export const personalCareListingTheme: PersonalCareListingTheme = {
  accent: "#8200db",
  accentSoft: "#a14ce8",
  border: "#c89cf1",
  chipBg: "#f2e8ff",
  panelBg: "#faf5ff",
  pageBg: "#fdfaff",
};

export function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace("#", "");
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
