const path = require('path');

module.exports = {
  entry: './src/app/js/main.js',
  output: {
    path: path.resolve(__dirname, '_site/statics/js'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
