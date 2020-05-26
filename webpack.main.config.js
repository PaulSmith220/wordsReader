const path = require("path");
const merge = require("webpack-merge");

const base = require("./webpack.base.config");
const buildPath = path.resolve(__dirname, "./build");

const main = merge(base, {
  entry: "./main.js",
  output: {
    filename: "main.js",
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: "electron-main"
});

module.exports = main;