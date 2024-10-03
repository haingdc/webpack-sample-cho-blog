const path = require("path");
const StatoscopeWebpackPlugin = require("@statoscope/webpack-plugin").default;
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

/**
 * @type {import("webpack/types").Configuration}
 */
module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].initial.js",
    clean: true,
    chunkFilename: "[name].not-initial.js",
  },
  // resolve: {
  //   modules: [path.resolve(__dirname, "src/node_modules")],
  // },
  optimization: {
    minimize: false,
    moduleIds: "named",
    chunkIds: "named",
    splitChunks: false,
  },
  stats: {
    all: true, // enable all the stats
  },
  plugins: [
    // new CleanWebpackPlugin({
    //   dry: false,
    //   verbose: false,
    //   cleanOnceBeforeBuildPatterns: ["../analyze/*"],
    //   cleanOnceBeforeBuildPatterns: [],
    //   dangerouslyAllowCleanPatternsOutsideProject: true,
    // }),
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new StatoscopeWebpackPlugin({
      name: "stat-webpack-sample",
      open: false,
      compressor: "gzip",
      saveReportTo: "analyze/report.html",
      saveStatsTo: "analyze/stats/[name]-[hash].json",
      normalizeStats: false,
      reports: [],
      additionalStats: glob.sync("./analyze/stats/*.json"),
    }),
  ],
};
