const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: './renderer/app.ts',
  output: {
    path: path.join(__dirname, 'build', 'renderer'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    port: 8000,
    stats: "minimal",
    watchContentBase: true,
    historyApiFallback: true,
    open: false,
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "main/index.html",
      filename: "../index.html"
    }),
  ],
};