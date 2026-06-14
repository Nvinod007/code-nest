const { createGlobPatternsForDependencies } = require("@nx/next/tailwind");

/** Avoid crashing when Nx project graph is unavailable (e.g. Vercel isolated install). */
function nxContentGlobs() {
  try {
    return createGlobPatternsForDependencies(__dirname);
  } catch {
    return [];
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}",
    "!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}",
    ...nxContentGlobs(),
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
};
