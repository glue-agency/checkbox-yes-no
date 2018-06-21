import path from 'path';

export default {
  entry: './src/CheckboxYesNo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'checkbox-yes-no.js',
    library: 'CheckboxYesNo',
    libraryExport: 'default',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
