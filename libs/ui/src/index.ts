export {
  getHeroUiThemeOverride,
  getShadcnCssVariables,
  getThemePresetDefinition,
  isThemePresetId,
  SHADCN_CSS_VAR_KEYS,
  THEME_PRESET_IDS,
  THEME_PRESETS,
  type ShadcnSurfaceTokens,
  type ThemeMode,
  type ThemePresetDefinition,
  type ThemePresetId,
} from "@code-nest/themes/browser";
export {
  CodeNestProvider,
  type CodeNestProviderProps,
  type CodeNestThemeContextValue,
  useCodeNestTheme,
} from "./lib/code-nest-provider";
export { buttonVariants, type ButtonVariantProps } from "./lib/button-variants";
export { HeroPrimaryButton } from "./lib/hero-primary-button";
export {
  ShadcnButton,
  type ShadcnButtonProps,
} from "./lib/shadcn-button";
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./lib/shadcn-card";
export { ThemeToggle } from "./lib/theme-toggle";
export { cn } from "./lib/utils/cn";

/**
 * Full HeroUI surface (Button, Card, Modal, …) under one namespace so it does not
 * collide with shadcn-style exports (`Card`, `ShadcnButton`, …) from this package.
 *
 * @example
 * import { Heroui } from "@code-nest/ui";
 * <Heroui.Chip>HeroUI</Heroui.Chip>
 */
export * as Heroui from "@heroui/react";
