var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },
  const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');
  const DefinePlugin = require('webpack/lib/DefinePlugin');
  const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
  const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
  const CompressionPlugin = require('compression-webpack-plugin');
  const WebpackMd5Hash = require('webpack-md5-hash');

  plugins: [
    new NoErrorsPlugin(),
    new DedupePlugin(),
    new UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
