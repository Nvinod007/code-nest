const plugin = require("tailwindcss/plugin");
import { CSSRuleObject } from "tailwindcss/types/config";

export const tailwindPlugin = plugin(
  function ({
    addBase,
    addComponents,
    addUtilities,
    theme,
  }: {
    addBase: (base: CSSRuleObject | CSSRuleObject[]) => void;
    addComponents: (components: CSSRuleObject | CSSRuleObject[]) => void;
    addUtilities: (utilities: CSSRuleObject | CSSRuleObject[]) => void;
    theme: (path?: string) => unknown;
  }) {
    addBase({
      h1: {
        fontSize: theme("fontSize.2xl") as string,
      },
    });
    addComponents({
      ".card": {
        backgroundColor: theme("colors.white") as string,
        borderRadius: theme("borderRadius.lg") as string,
        padding: theme("padding.6") as string,
      },
    });
    addUtilities({
      ".rotate-180": {
        transform: "rotate(180deg)",
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: "#2292BD",
            dark: "#005073",
            light: "#3fbaeb",
          },
        },
      },
    },
  }
);
