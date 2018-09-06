const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader'
              ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
          },
          {
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
          },
          {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
          }
      ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  performance : {
    hints : false
  }   
};