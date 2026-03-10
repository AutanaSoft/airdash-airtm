import { nestJsConfig } from "@airdash/eslint-config/nest-js";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nestJsConfig,
  {
    ignores: ["**/*.d.ts"]
  }
];
