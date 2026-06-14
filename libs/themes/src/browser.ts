/**
 * Browser / Next-safe entry — no `tailwindcss` plugin (avoids pulling Tailwind into client bundles).
 * Use `@code-nest/themes` (main) for Node / `tailwind.config.js` (e.g. `tailwindPlugin`).
 */
export * from "./lib/hero-ui-tailwind.js";
export * from "./lib/presets.js";
export * from "./lib/shadcn-variables.js";
