/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-21 19:46:57
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-21 20:55:33
 * @Description:
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "./", dir);
}
module.exports = {
  mode: "development",
  resolve: {
    alias: {
      vue: resolve("src/platforms/web/entry-runtime-with-compiler"),
      compiler: resolve("src/compiler"),
      core: resolve("src/core"),
      shared: resolve("src/shared"),
      web: resolve("src/platforms/web"),
      weex: resolve("src/platforms/weex"),
      server: resolve("src/server"),
      sfc: resolve("src/sfc"),
    },
  },
  entry: {
    main: path.resolve(__dirname, "./debug-src/src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./debug-dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./debug-src/src/index.html"), // template file
      filename: "index.html", // output file
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __WEEX__: false,
      __WEEX_VERSION_: 1,
      __VERSION__: 2.6,
    }),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "./debug-dist/src"),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};
