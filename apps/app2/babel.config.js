const path = require("path");
const packagesDir = path.join(__dirname, "../../packages/");

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".js", ".ts", ".tsx", ".ios.js", ".android.js", ".json"]
      }
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin"
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  }
};
