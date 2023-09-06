const config = require("../../.eslintrc.js");

module.exports = {
  ...config,
  parserOptions: {
    ...config.parserOptions,
    tsconfigRootDir: __dirname,
    project: "tsconfig-eslint.json",
    sourceType: "module"
  }
};
