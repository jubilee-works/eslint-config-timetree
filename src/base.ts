import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import prettier from "eslint-config-prettier";
import functional from "eslint-plugin-functional";
// @ts-expect-error
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
// @ts-expect-error
import jest from "eslint-plugin-jest";
// @ts-expect-error
import preferArrow from "eslint-plugin-prefer-arrow";
// @ts-expect-error
import promise from "eslint-plugin-promise";
import { fixupPluginRules } from "@eslint/compat";

import { isJestInstalled } from "./utils/jest";
import importX from "./vendor/eslint-plugin-import-x";
import jestFormatting from "./vendor/eslint-plugin-jest-formatting";

export default tseslint.config(
  eslint.configs.recommended,
  importX.configs.errors,
  prettier,
  functional.configs.externalVanillaRecommended,
  functional.configs.recommended,
  comments.recommended,
  ...(isJestInstalled()
    ? [
        jest.configs["flat/recommended"],
        jest.configs["flat/style"],
        jestFormatting.configs.recommended,
      ]
    : []),
  {
    name: "eslint-config-timetree/base-javascript",
    plugins: {
      // @ts-expect-error
      "prefer-arrow": fixupPluginRules(preferArrow),
      // @ts-expect-error
      promise: fixupPluginRules(promise),
    },
    languageOptions: {
      // sourceType: "module",
      // ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "arrow-body-style": ["error", "as-needed"],
      "default-case": "error",
      eqeqeq: ["error", "smart"],
      "@eslint-community/eslint-comments/no-unused-disable": "error",
      "functional/functional-parameters": "off",
      "functional/immutable-data": "off",
      "functional/no-classes": "off",
      "functional/no-conditional-statements": "off",
      "functional/no-expression-statements": "off",
      "functional/no-mixed-types": "off",
      "functional/no-return-void": "off",
      "functional/no-this-expressions": "off",
      "functional/no-throw-statements": "off",
      "functional/no-try-statements": "off",
      "functional/prefer-immutable-types": "off",
      "functional/prefer-property-signatures": "error",
      "functional/prefer-readonly-type": [
        "error",
        { ignorePattern: "^mutable" },
      ],
      "functional/prefer-type-literal": "off",
      "functional/no-let": [
        "error",
        { allowInFunctions: true, ignoreIdentifierPattern: "^mutable" },
      ],
      "import-x/imports-first": "error",
      "import-x/named": "off",
      "import-x/namespace": "off",
      "import-x/newline-after-import": "error",
      "import-x/no-duplicates": "error",
      "import-x/order": [
        "error",
        {
          pathGroups: [
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "no-console": ["warn", { allow: ["info", "warn", "error", "dir"] }],
      "no-duplicate-imports": "off",
      "no-implicit-coercion": ["error", { allow: ["!!"] }],
      "no-irregular-whitespace": "off",
      "no-prototype-builtins": "off",
      "no-undef": "off",
      "no-undefined": "off",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-arrow/prefer-arrow-functions": "error",
      "prefer-const": "error",
      "promise/catch-or-return": "error",
      radix: "error",
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
    },
  },
  {
    name: "eslint-config-timetree/base-typescript",
    files: ["**.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommended,
      functional.configs.externalTypeScriptRecommended,
    ],
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "functional/immutable-data": [
        "error",
        {
          ignoreIdentifierPattern: ["^mutable", "module.exports"],
          ignoreAccessorPattern: "^*",
        },
      ],
    },
  }
);
