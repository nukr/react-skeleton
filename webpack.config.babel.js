import path from 'path'

export default {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
}
