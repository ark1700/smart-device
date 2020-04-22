const path = require('path');

module.exports = {
  entry: './source/vendor.js',
  output: {
    filename: 'vendor.js',
    path: path.resolve(__dirname, 'source/js'),
  },
};
