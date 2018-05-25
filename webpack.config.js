var path = require('path');

module.exports = {
  entry: './src/CheckboxYesNo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'checkbox-yes-no.js',
    library: 'CheckboxYesNo',
    libraryExport: 'default',
    libraryTarget: 'window'
  }
};
