const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')
const config = require('./webpack.config')
const webpack = require('webpack')

const app = express()
const compiler = webpack(config)

app.use(history({
  index: '/index.html'
}))

app.use(express.static('static'))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  hot: true
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening on port 3000')
})
