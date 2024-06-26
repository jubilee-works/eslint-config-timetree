import type { Linter } from "eslint";

const isJestInstalled = (() => {
  try {
    require.resolve("jest");
    return true;
  } catch {
    return false;
  }
})();

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:functional/external-vanilla-recommended",
    "plugin:functional/recommended",
    "plugin:import/errors",
    "prettier",
    ...(isJestInstalled
      ? [
          "plugin:jest-formatting/recommended",
          "plugin:jest/recommended",
          "plugin:jest/style",
        ]
      : []),
  ],
  plugins: [
    "functional",
    "prefer-arrow",
    "promise",
    ...(isJestInstalled ? ["jest-formatting", "jest"] : []),
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    ...(isJestInstalled ? { "jest/globals": true } : {}),
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "default-case": "error",
    eqeqeq: ["error", "smart"],
    "eslint-comments/no-unused-disable": "error",
    "functional/functional-parameters": "off",
    "functional/immutable-data": [
      "error",
      {
        ignoreIdentifierPattern: ["^mutable", "module.exports"],
        ignoreAccessorPattern: "^*",
      },
    ],
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
    "functional/prefer-readonly-type": ["error", { ignorePattern: "^mutable" }],
    "functional/prefer-type-literal": "off",
    "functional/no-let": [
      "error",
      { allowInFunctions: true, ignoreIdentifierPattern: "^mutable" },
    ],
    "import/imports-first": "error",
    "import/named": "off",
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/order": [
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
  overrides: [
    {
      files: ["**.{ts,tsx}"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:functional/external-typescript-recommended",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
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
      },
    },
  ],
} as Linter.Config;
