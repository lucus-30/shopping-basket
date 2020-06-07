const {override, fixBabelImports, addLessLoader, addBabelPlugin} = require("customize-cra")

module.exports = override(
  addBabelPlugin(
    ["babel-plugin-root-import", {
      rootPathSuffix: "src",
      rootPathPrefix: "~"
    }]
  ),
  addBabelPlugin(["react-hot-loader/babel"])
)