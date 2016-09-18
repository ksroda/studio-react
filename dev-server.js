// const express = require('express')
// const app = express()
//
// app.get('*', function (req, res) {
//   res.sendFile(__dirname + '/index.html')
// })
//
// app.listen(8080, function () {
//   console.log('Example app listening on port 3000!')
// })


const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  console.log(config)
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler);

  app.use(middleware);
  // app.use(webpackHotMiddleware(compiler));
  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });
} else {
  app.use(express.static(__dirname + '/'));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});