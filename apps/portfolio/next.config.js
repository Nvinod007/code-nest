//@ts-check

const { composePlugins, withNx } = require("@nx/next");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  /** Nx ESLint rules need a ProjectGraph; Vercel’s `next build` often has no graph — use `nx run portfolio:lint` in CI. */
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL === "1",
  },
  experimental: {
    appNavFailHandling: true,
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  transpilePackages: ["framer-motion"],
  webpack: (config, { dev, isServer }) => {
    config.cache = false;
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
