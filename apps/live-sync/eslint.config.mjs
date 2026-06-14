import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import { eslintConfigsForNextApps } from "../../eslint.config.mjs";

const config = [
  ...nextCoreWebVitals,
  ...eslintConfigsForNextApps,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "import/no-default-export": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    ignores: [".next/**/*", "node_modules/**/*"],
  },
];
export default config;
