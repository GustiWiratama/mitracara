import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** eslint-config-next 16 ships native flat configs, so no compat layer is needed. */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(["node_modules/**", ".next/**", ".next/dev/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
