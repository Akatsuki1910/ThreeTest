const path = require('path');

module.exports = {
  entry: `./src/index.js`,
  watch: true,
  cache: true,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
  }
};