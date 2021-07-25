const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { InjectManifest } = require("workbox-webpack-plugin");
const zlip = require("zlib");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      esmodules: true,
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true })],
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: "static" }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html)$/,
      compressionOptions: {
        params: {
          [zlip.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
    }),
    new InjectManifest({
      swSrc: "./src/service-worker.js",
      swDest: "sw.js",
    }),
    new RobotstxtPlugin(),
    new WebpackPwaManifest({
      name: "We The Food",
      short_name: "WTF",
      description:
        "Bagikan dan minta makanan gratis tanpa layanan antar dan pembayaran.",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#fa4032",
      lang: "id",
      orientation: "portrait",
      categories: ["food"],
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve(__dirname, "public/icons/general-icon.png"),
          sizes: [64, 120, 144, 152, 192, 384, 512],
        },
        {
          src: path.resolve(__dirname, "public/icons/maskable-icon.png"),
          purpose: "maskable",
          sizes: [64, 120, 144, 152, 192, 384, 512],
        },
        {
          src: path.resolve(__dirname, "public/icons/apple-icon.png"),
          size: "192x192",
          ios: true,
        },
      ],
    }),
  ],
});
