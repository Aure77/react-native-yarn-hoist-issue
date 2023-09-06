module.exports = {
  extends: ["../../.eslintrc.js"],
  rules: {
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        patterns: [
          "@bddf/*/*",
          "!@bddf/components/assets",
          "!@bddf/components/lib",
          "!@bddf/fp-ts/lib"
        ]
      }
    ],
    "mobx/missing-observer": "off"
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig-eslint.json",
    sourceType: "module"
  }
};
