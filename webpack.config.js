const path = require("path");

/**
 * @type {import("webpack/types").Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src/node_modules")],
  },
  optimization: {
    minimize: false,
    moduleIds: "named",
    chunkIds: "named",
    splitChunks: false,
  },
};
