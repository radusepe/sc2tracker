const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const config = {
  entry:  __dirname + '/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      }
    ],
  },
  plugins: [  new ExtractTextPlugin('styles.css') ]
};
module.exports = config;
