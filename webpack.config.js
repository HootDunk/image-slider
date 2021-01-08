const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: ["file-loader"]
      }
    ]
  },
  mode: 'production',
};
