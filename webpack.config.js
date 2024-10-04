const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

/**
 * @type {import("webpack/types").Configuration}
 */
module.exports = {
  mode: "development",
  devtool: "source-map",
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
    minimize: true,
    usedExports: true,
    concatenateModules: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            keep_fnames: true, // keep function names as they are
          },
        },
      }),
    ],
  },
};
