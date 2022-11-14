const express = require('express');
const { config } = require('webpack');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const tconfig = require('./webpack.config.js');
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.listen(3000, function () {
    console.log('Example app listiening on port 3000!\n');
})