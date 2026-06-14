/**
 * Design tokens shared by shadcn-style CSS variables and HeroUI tailwind plugin config.
 * Shadcn-compatible values are space-separated HSL components (no `hsl()` wrapper).
 */
export const THEME_PRESET_IDS = ["slate", "ocean", "rose"] as const;

export type ThemePresetId = (typeof THEME_PRESET_IDS)[number];

export type ThemeMode = "light" | "dark";

/** One mode worth of shadcn-style semantic tokens. */
export type ShadcnSurfaceTokens = {
  accent: string;
  accentForeground: string;
  background: string;
  border: string;
  card: string;
  cardForeground: string;
  destructive: string;
  destructiveForeground: string;
  foreground: string;
  input: string;
  muted: string;
  mutedForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  radius: string;
  ring: string;
  secondary: string;
  secondaryForeground: string;
};

/** Hex colors for HeroUI `heroui({ themes: { ... } })` layouts. */
export type HeroUiHexTheme = {
  dark: { primary: string; primaryForeground: string };
  light: { primary: string; primaryForeground: string };
};

export type ThemePresetDefinition = {
  /** Pass to `heroui({ themes })` — `colors.primary` slot. */
  heroUi: HeroUiHexTheme;
  surfaces: Record<ThemeMode, ShadcnSurfaceTokens>;
};

const slate: ThemePresetDefinition = {
  heroUi: {
    dark: { primary: "#38bdf8", primaryForeground: "#0f172a" },
    light: { primary: "#0f172a", primaryForeground: "#f8fafc" },
  },
  surfaces: {
    dark: {
      accent: "217.2 32.6% 17.5%",
      accentForeground: "210 40% 98%",
      background: "222.2 84% 4.9%",
      border: "217.2 32.6% 17.5%",
      card: "222.2 84% 4.9%",
      cardForeground: "210 40% 98%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "210 40% 98%",
      foreground: "210 40% 98%",
      input: "217.2 32.6% 17.5%",
      muted: "217.2 32.6% 17.5%",
      mutedForeground: "215 20.2% 65.1%",
      popover: "222.2 84% 4.9%",
      popoverForeground: "210 40% 98%",
      primary: "210 40% 98%",
      primaryForeground: "222.2 47.4% 11.2%",
      radius: "0.5rem",
      ring: "212.7 26.8% 83.9%",
      secondary: "217.2 32.6% 17.5%",
      secondaryForeground: "210 40% 98%",
    },
    light: {
      accent: "210 40% 96.1%",
      accentForeground: "222.2 47.4% 11.2%",
      background: "0 0% 100%",
      border: "214.3 31.8% 91.4%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      foreground: "222.2 84% 4.9%",
      input: "214.3 31.8% 91.4%",
      muted: "210 40% 96.1%",
      mutedForeground: "215.4 16.3% 46.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "222.2 47.4% 11.2%",
      primaryForeground: "210 40% 98%",
      radius: "0.5rem",
      ring: "222.2 84% 4.9%",
      secondary: "210 40% 96.1%",
      secondaryForeground: "222.2 47.4% 11.2%",
    },
  },
};

const ocean: ThemePresetDefinition = {
  heroUi: {
    dark: { primary: "#22d3ee", primaryForeground: "#0c4a6e" },
    light: { primary: "#0891b2", primaryForeground: "#ecfeff" },
  },
  surfaces: {
    dark: {
      accent: "191 40% 18%",
      accentForeground: "186 100% 94%",
      background: "200 25% 8%",
      border: "191 32% 22%",
      card: "198 28% 10%",
      cardForeground: "186 100% 96%",
      destructive: "0 62.8% 35%",
      destructiveForeground: "210 40% 98%",
      foreground: "186 100% 96%",
      input: "191 32% 22%",
      muted: "198 22% 18%",
      mutedForeground: "186 20% 65%",
      popover: "198 28% 10%",
      popoverForeground: "186 100% 96%",
      primary: "187 92% 48%",
      primaryForeground: "198 85% 8%",
      radius: "0.5rem",
      ring: "187 92% 52%",
      secondary: "198 22% 22%",
      secondaryForeground: "186 100% 94%",
    },
    light: {
      accent: "186 100% 94%",
      accentForeground: "192 91% 29%",
      background: "0 0% 100%",
      border: "186 30% 88%",
      card: "0 0% 100%",
      cardForeground: "200 20% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      foreground: "200 20% 15%",
      input: "186 30% 88%",
      muted: "186 50% 96%",
      mutedForeground: "192 15% 40%",
      popover: "0 0% 100%",
      popoverForeground: "200 20% 15%",
      primary: "192 91% 36%",
      primaryForeground: "186 100% 97%",
      radius: "0.5rem",
      ring: "192 91% 40%",
      secondary: "186 45% 92%",
      secondaryForeground: "192 91% 29%",
    },
  },
};

const rose: ThemePresetDefinition = {
  heroUi: {
    dark: { primary: "#fb7185", primaryForeground: "#450a0a" },
    light: { primary: "#e11d48", primaryForeground: "#fff1f2" },
  },
  surfaces: {
    dark: {
      accent: "346 35% 18%",
      accentForeground: "355 100% 96%",
      background: "352 20% 8%",
      border: "346 28% 22%",
      card: "350 22% 11%",
      cardForeground: "355 100% 97%",
      destructive: "0 62.8% 35%",
      destructiveForeground: "210 40% 98%",
      foreground: "355 100% 97%",
      input: "346 28% 22%",
      muted: "346 22% 18%",
      mutedForeground: "350 20% 68%",
      popover: "350 22% 11%",
      popoverForeground: "355 100% 97%",
      primary: "350 89% 60%",
      primaryForeground: "352 50% 10%",
      radius: "0.5rem",
      ring: "350 89% 66%",
      secondary: "346 28% 20%",
      secondaryForeground: "355 100% 94%",
    },
    light: {
      accent: "350 100% 97%",
      accentForeground: "347 77% 40%",
      background: "0 0% 100%",
      border: "350 40% 90%",
      card: "0 0% 100%",
      cardForeground: "352 25% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      foreground: "352 25% 15%",
      input: "350 40% 90%",
      muted: "350 60% 96%",
      mutedForeground: "346 20% 42%",
      popover: "0 0% 100%",
      popoverForeground: "352 25% 15%",
      primary: "347 77% 50%",
      primaryForeground: "350 100% 98%",
      radius: "0.5rem",
      ring: "347 77% 45%",
      secondary: "350 55% 93%",
      secondaryForeground: "347 77% 36%",
    },
  },
};

export const THEME_PRESETS: Record<ThemePresetId, ThemePresetDefinition> = {
  ocean,
  rose,
  slate,
};

export function getThemePresetDefinition(
  id: ThemePresetId,
): ThemePresetDefinition {
  return THEME_PRESETS[id];
}

export function isThemePresetId(value: string): value is ThemePresetId {
  return (THEME_PRESET_IDS as readonly string[]).includes(value);
}
