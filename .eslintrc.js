module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    lib: ["es2019"]
  },
  plugins: ["prefer-arrow", "import", "@typescript-eslint", "prettier", "mobx"],
  env: {
    es6: true,
    "jest/globals": true
  },
  extends: [
    "plugin:jest/recommended",
    "plugin:import/typescript",
    "@react-native-community",
    "plugin:prettier/recommended",
    "plugin:mobx/recommended"
  ],
  ignorePatterns: ["**/lib/**"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit"
      }
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-declare": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-parens": ["off", "as-needed"],
    "capitalized-comments": "off",
    complexity: "off",
    "constructor-super": "error",
    curly: "error",
    "default-case": "off",
    "dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "id-match": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.ts",
          "**/*.spec.ts",
          "**/*.test.tsx",
          "**/*.spec.tsx"
        ]
      }
    ],
    "import/no-internal-modules": "off",
    "max-classes-per-file": ["error", 1],
    "no-bitwise": "off",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-restricted-imports": "off",
    "no-shadow": [
      "off",
      {
        hoist: "all"
      }
    ],
    "no-throw-literal": "error",
    "no-undef": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/2477#issuecomment-686892459
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      { singleReturnOnly: true }
    ],
    "prefer-const": "error",
    "prefer-template": "error",
    radix: "error",
    "require-yield": "error",
    "use-isnan": "error",
    "valid-typeof": "off"
  }
};
