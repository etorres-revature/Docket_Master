const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");

/**
 * Webpack Config
 * @see https://webpack.js.org/concepts/configuration/
 */
const config = {
  entry: "./public/assets/js/signup.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js",
  },
  mode: "development",

  plugins: [
    new WebpackPwaManifest({
      publicPath: "/dist/",
      filename: "manifest.webmanifest",
      inject: false,
      fingerprints: false,
      name: "Docket Master",
      short_name: "Docket Master",
      theme_color: "#333333",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      icons: [
        {
          src: path.resolve(__dirname, "public/assets/img/favicon/scales-icon.png"),
          size: [72, 96, 128, 144, 152, 192, 384, 512],
        },
      ],
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "../service-worker.js",
      clientsClaim: true,
      skipWaiting: true,
      exclude: [
        /\.(?:png|jpb|jpeg|svg)$/,
        /\.map$/,
        /manifest\.webmanifest$/,
        /bundle\.js/,
        /service-worker\.js$/,
        /sw\.js$/,
      ],
      runtimeCaching: [
        {
          urlPattern: "/.(?:html|htm|xml)$/",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "markup",
            expiration: {
              maxAgeSeconds: 31536000,
            },
          },
        },
        {
          urlPattern: "/.(?css|js)$/",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "assets",
            expiration: {
              maxEntries: "500",
              maxAgeSeconds: 31536000,
            },
          },
        },
        {
          urlPattern: "/.(?png|jpg|jpeg|gif|bmp|webp|svg|ico)$/",
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: "500",
              maxAgeSeconds: 31536000,
            },
          },
        },
      ],
    }),
  ],
};

module.exports = config;
