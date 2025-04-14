import baseConfig from "../../eslint.config.mjs";

export default [
  ...baseConfig,
  {
    ignores: [
      "**/generated/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/*.config.js",
      "**/coverage/**"
    ]
  },
];
