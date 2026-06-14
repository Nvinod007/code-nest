import type { ShadcnSurfaceTokens, ThemeMode, ThemePresetId } from "./presets.js";
import { getThemePresetDefinition } from "./presets.js";

const VAR_MAP: Record<keyof ShadcnSurfaceTokens, string> = {
  accent: "--accent",
  accentForeground: "--accent-foreground",
  background: "--background",
  border: "--border",
  card: "--card",
  cardForeground: "--card-foreground",
  destructive: "--destructive",
  destructiveForeground: "--destructive-foreground",
  foreground: "--foreground",
  input: "--input",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  popover: "--popover",
  popoverForeground: "--popover-foreground",
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  radius: "--radius",
  ring: "--ring",
  secondary: "--secondary",
  secondaryForeground: "--secondary-foreground",
};

/** Keys injected on `:root` for cleanup. */
export const SHADCN_CSS_VAR_KEYS: string[] = Object.values(VAR_MAP);

export function getShadcnCssVariables(
  presetId: ThemePresetId,
  mode: ThemeMode,
): Record<string, string> {
  const surfaces = getThemePresetDefinition(presetId).surfaces[mode];
  const out: Record<string, string> = {};
  for (const key of Object.keys(VAR_MAP) as (keyof ShadcnSurfaceTokens)[]) {
    out[VAR_MAP[key]] = surfaces[key];
  }
  return out;
}
