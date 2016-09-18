const path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['webpack-hot-middleware', path.resolve(__dirname, 'app', 'index.js')],
  output: {
    path: path.resolve(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, '/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
