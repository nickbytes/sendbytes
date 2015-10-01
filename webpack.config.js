var path = require("path");

module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "bundle.js",
    publicPath: "http://localhost:8080/assets"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel' },
      { test: /\.css$/, exclude: /colors\.css/, loader: 'style-loader!css-loader!cssnext-loader' }
    ]
  },
  cssnext: {
    compress: true
  }
}
