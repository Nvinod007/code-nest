import playwright from "eslint-plugin-playwright";
import baseConfig from "../../eslint.config.mjs";

export default [
  playwright.configs["flat/recommended"],
  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.js"],
    // Override or add rules here
    rules: {
      "import/no-default-export": "off",
    },
  },
  {
    ignores: [".next/**/*", "node_modules/**/*"],
  },
];
