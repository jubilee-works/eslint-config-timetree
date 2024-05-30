// @ts-expect-error
import * as jestFormatting from "eslint-plugin-jest-formatting";

// TODO:
export default {
  configs: {
    recommended: {
      plugins: {
        "jest-formatting": jestFormatting,
      },
      rules: jestFormatting.configs.recommended.overrides[0].rules,
    },
  },
};
