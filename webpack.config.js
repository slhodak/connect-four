var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.js'),
  output: {
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  // loaders: [{
  //   test: /ReactDOM/,
  //   loader: 'expose-loader?ReactDOM!expose-loader?$'
  // }],
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     "React": "React",
  //     "ReactDOM": "ReactDOM"
  //   })
  // ]
}