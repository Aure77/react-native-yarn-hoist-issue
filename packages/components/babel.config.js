module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".js", ".ts", ".tsx", ".ios.js", ".android.js"],
        alias: {
          "@components": "./src",
          "@components-assets": "./assets"
        }
      }
    ]
  ]
};
