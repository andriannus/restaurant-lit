const webpackConfig = require("./webpack.common");

module.exports = (config) => {
  config.set({
    basePath: "./",
    files: ["tests/unit/*.spec.ts"],
    frameworks: ["mocha"],
    preprocessors: {
      "tests/unit/*.spec.ts": ["webpack", "sourcemap"],
    },
    webpack: {
      devtool: "inline-source-map",
      mode: "development",
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },
    webpackMiddleware: {
      stats: "errors-only",
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    concurrency: Infinity,
  });
};
