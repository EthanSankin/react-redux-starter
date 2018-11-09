const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
      ]
    },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build')
  }
};