const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { InjectManifest } = require("workbox-webpack-plugin");

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
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new InjectManifest({
      swSrc: "./src/service-worker.js",
      swDest: "sw.js",
    }),
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
      icons: [
        {
          src: path.resolve(
            __dirname,
            "src/app/shared/assets/icons/general-icon.png",
          ),
          sizes: [64, 120, 144, 152, 192, 384, 512],
        },
        {
          src: path.resolve(
            __dirname,
            "src/app/shared/assets/icons/maskable-icon.png",
          ),
          sizes: [64, 120, 144, 152, 192, 384, 512],
        },
        {
          src: path.resolve(
            __dirname,
            "src/app/shared/assets/icons/apple-icon.png",
          ),
          size: "192x192",
          ios: true,
        },
      ],
    }),
  ],
});
