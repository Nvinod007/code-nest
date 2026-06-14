const { withNx } = require("@nx/rollup/with-nx");
const url = require("@rollup/plugin-url");
const svg = require("@svgr/rollup");

module.exports = withNx(
  {
    main: "./src/index.ts",
    outputPath: "./dist",
    tsConfig: "./tsconfig.lib.json",
    compiler: "babel",
    format: ["esm"],
    assets: [{ input: ".", output: ".", glob: "README.md" }],
  },
  {
    /**
     * On the **second** `withNx` argument so Nx does not replace `external` with “all
     * package.json deps” (which would keep `@code-nest/themes/browser` external and
     * reproduce the Next Fast Refresh `import.meta` error).
     *
     * Do not inline `react/jsx-*`; a inlined dev runtime sets `jsxDEV` to undefined in prod.
     */
    external: [
      "@heroui/react",
      "@heroui/theme",
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "framer-motion",
      "lucide-react",
      "next-themes",
      "react",
      "react-dom",
      "react/jsx-dev-runtime",
      "react/jsx-runtime",
      "tailwind-merge",
    ],
    plugins: [
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
    ],
  }
);
