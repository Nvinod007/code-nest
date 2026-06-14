import nx from "@nx/eslint-plugin";
import sortKeysPlugin from "eslint-plugin-sort-keys-fix";

const sharedIgnoresAndRules = [
  {
    ignores: [
      "**/dist",
      "**/vite.config.*.timestamp*",
      "**/vitest.config.*.timestamp*",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: {
      "sort-keys-fix": sortKeysPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$"],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
        },
      ],
      "sort-keys-fix/sort-keys-fix": ["error", "asc", { caseSensitive: true, natural: false }],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.cts",
      "**/*.mts",
      "**/*.js",
      "**/*.jsx",
      "**/*.cjs",
      "**/*.mjs",
    ],
    rules: {
      "no-console": ["error", { allow: ["warn", "info", "error"] }],
    },
  },
];

// Next apps: omit Nx flat TS/JS (conflicts with eslint-config-next’s @typescript-eslint).
export const eslintConfigsForNextApps = [...nx.configs["flat/base"], ...sharedIgnoresAndRules];

export default [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  ...sharedIgnoresAndRules,
];
