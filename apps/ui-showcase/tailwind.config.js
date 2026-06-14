// @ts-check

const { join } = require("path");
const { heroui } = require("@heroui/theme");

/**
 * Do not use Nx `createGlobPatternsForDependencies` here: it calls `readCachedProjectGraph()`,
 * which is unavailable when PostCSS loads this file during `next build` (no Nx graph in
 * that process). Explicit `content` globs below cover the app and `libs/ui`.
 *
 * Build-time HeroUI primary ramp (default). Runtime preset switching updates
 * `@code-nest/ui` shadcn CSS variables; `HeroPrimaryButton` also syncs hex from `@code-nest/themes`.
 * Keep in sync with `getHeroUiThemeOverride("slate")` in libs/themes.
 */
const heroPresetSlate = {
  dark: {
    colors: {
      primary: {
        DEFAULT: "#38bdf8",
        foreground: "#0f172a",
      },
    },
  },
  light: {
    colors: {
      primary: {
        DEFAULT: "#0f172a",
        foreground: "#f8fafc",
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,js,jsx,html,mdx}"
    ),
    join(__dirname, "../../libs/ui/src/**/*!(*.stories|*.spec).{ts,tsx,js,jsx,html}"),
  ],
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          ...heroPresetSlate.dark,
        },
        light: {
          ...heroPresetSlate.light,
        },
      },
    }),
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
};
