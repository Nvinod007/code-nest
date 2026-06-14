"use client";

import {
  getShadcnCssVariables,
  SHADCN_CSS_VAR_KEYS,
  type ThemeMode,
  type ThemePresetId,
} from "@code-nest/themes/browser";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import * as React from "react";

export type CodeNestThemeContextValue = {
  preset: ThemePresetId;
  setPreset: (id: ThemePresetId) => void;
};

const CodeNestThemeContext =
  React.createContext<CodeNestThemeContextValue | null>(null);

function ThemeVariableBridge({ preset }: { preset: ThemePresetId }) {
  const { resolvedTheme } = useTheme();
  const mode: ThemeMode = resolvedTheme === "dark" ? "dark" : "light";

  React.useLayoutEffect(() => {
    const root = document.documentElement;
    const vars = getShadcnCssVariables(preset, mode);
    for (const [key, val] of Object.entries(vars)) {
      root.style.setProperty(key, val);
    }
    return () => {
      for (const key of SHADCN_CSS_VAR_KEYS) {
        root.style.removeProperty(key);
      }
    };
  }, [preset, mode]);

  return null;
}

export type CodeNestProviderProps = {
  children: React.ReactNode;
  /** Drives `--primary` / shadcn tokens and HeroUI primary (via tailwind config in the app). */
  defaultPreset?: ThemePresetId;
};

/**
 * Root provider: `next-themes` (class-based light/dark), HeroUI shell, and shadcn-style CSS variables on `:root`.
 */
export function CodeNestProvider({
  children,
  defaultPreset = "slate",
}: CodeNestProviderProps) {
  const [preset, setPreset] = React.useState<ThemePresetId>(defaultPreset);

  const value = React.useMemo(
    () => ({ preset, setPreset }),
    [preset],
  );

  return (
    <CodeNestThemeContext.Provider value={value}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <HeroUIProvider>
          <ThemeVariableBridge preset={preset} />
          {children}
        </HeroUIProvider>
      </NextThemesProvider>
    </CodeNestThemeContext.Provider>
  );
}

export function useCodeNestTheme(): CodeNestThemeContextValue {
  const ctx = React.useContext(CodeNestThemeContext);
  if (!ctx) {
    throw new Error("useCodeNestTheme must be used within CodeNestProvider");
  }
  return ctx;
}
