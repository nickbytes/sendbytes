var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    './app/App'
  ],
  output: {
    path: path.join(__dirname, ''),
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        exclude: /colors\.css/,
        loader: 'style-loader!css-loader!cssnext-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  cssnext: {
    compress: true
  }
}
