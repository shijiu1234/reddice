import path from 'path';

export default {
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [' ', '.js']
  }
}
