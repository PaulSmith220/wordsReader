const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const base = require("./webpack.base.config");
const buildPath = path.resolve(__dirname, "./dist");

const renderer = merge(base, {
  entry: "./src/renderer/index.js",
  output: {
    filename: "renderer.js",
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/,],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   exclude: [/node_modules/],
      //   use: [
      //     // 'style-loader',
      //     "css-loader"
      //   ]
      // },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  target: "electron-renderer"
  // target: "web"
});

module.exports = renderer;