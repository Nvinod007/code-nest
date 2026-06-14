// @ts-check

const { composePlugins, withNx } = require("@nx/next");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  /** Workspace UI bundle (themes token path is inlined by Rollup). */
  transpilePackages: ["@code-nest/ui"],
  /**
   * Dev-only: pnpm + workspace symlinks can break webpack’s persistent filesystem
   * cache (“Unable to snapshot resolve dependencies”), which then yields ChunkLoadError /
   * missing numbered chunks. Disable cache in dev to avoid a corrupted `.next`.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
