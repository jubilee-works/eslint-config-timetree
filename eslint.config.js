// @ts-check
const base = require("./base");

// /** @type {import('typescript-eslint').Config} */
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = [
  ...base,
  {
    files: ["src/**/*.{js,ts,tsx}"],
    ignores: ["dist", "node_modules"],
  },
];
