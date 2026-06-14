import type { ThemePresetId } from "./presets.js";
import { getThemePresetDefinition } from "./presets.js";

/**
 * Fragment for `@heroui/theme` `heroui({ themes: { light: {...}, dark: {...} } })`.
 * Merges into HeroUI defaults; primary comes from the active Code Nest preset.
 */
export function getHeroUiThemeOverride(presetId: ThemePresetId): {
  dark: { colors: { primary: Record<string, string> } };
  light: { colors: { primary: Record<string, string> } };
} {
  const { heroUi } = getThemePresetDefinition(presetId);
  return {
    dark: {
      colors: {
        primary: {
          DEFAULT: heroUi.dark.primary,
          foreground: heroUi.dark.primaryForeground,
        },
      },
    },
    light: {
      colors: {
        primary: {
          DEFAULT: heroUi.light.primary,
          foreground: heroUi.light.primaryForeground,
        },
      },
    },
  };
}
