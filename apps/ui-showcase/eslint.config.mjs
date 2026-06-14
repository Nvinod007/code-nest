import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import { eslintConfigsForNextApps } from "../../eslint.config.mjs";

const config = [
  ...nextCoreWebVitals,
  ...eslintConfigsForNextApps,
  {
    ignores: [".next/**/*"],
  },
];
export default config;
