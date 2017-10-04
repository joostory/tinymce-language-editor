const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'index': './src/index.js',
  },

  output: {
    path: path.join(__dirname),
    filename: '[name].min.js'
  },

  plugins: process.env.NODE_ENV !== "production" ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
  ],

  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
};