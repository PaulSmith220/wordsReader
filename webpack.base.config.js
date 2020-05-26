
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  optimization: {
    minimize: false
},
  plugins: [
    // new UglifyJsPlugin({
    //   test: /\.js($|\?)/i,
    //   sourceMap: true,
    //   uglifyOptions: {
    //     compress: false
    //   }
    // })
  ]
};

module.exports = config;