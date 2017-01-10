var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3000
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "file-loader?name=[name].[ext]",
        use: 'url',
        options: {
          name: 'fonts/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff',
        },

      },
      {
        test: /\.(ttf|eot|svg)$/,
        loader: "file-loader?name=[name].[ext]",
        use: 'file',
        options: {
          name: 'fonts/[hash].[ext]',
        }
      }
    ]
  }
};

module.exports = config;
