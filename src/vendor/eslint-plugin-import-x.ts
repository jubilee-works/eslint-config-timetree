import importX from "eslint-plugin-import-x";

// TODO: https://github.com/un-ts/eslint-plugin-import-x/issues/29
export default {
  configs: {
    errors: {
      plugins: {
        "import-x": importX,
      },
      rules: importX.configs.errors.rules,
    },
  },
};
