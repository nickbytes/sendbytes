module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "bundle.js"
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
