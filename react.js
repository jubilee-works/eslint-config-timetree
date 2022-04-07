module.exports = {
  extends: [
    require.resolve("./base"),
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["react-hooks"],
  settings: {
    react: { version: "detect" },
    linkComponents: ["Link"],
  },
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/display-name": "off",
    "react/forbid-component-props": ["error", { forbid: ["style"] }],
    "react/forbid-dom-props": ["error", { forbid: ["style"] }],
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "react/jsx-no-bind": "error",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/no-deprecated": "off",
    "react/no-direct-mutation-state": "off",
    "react/no-string-refs": "off",
    "react/prop-types": "off",
    "react/require-render-return": "off",
  },
};
