module.exports = {
  entry: './src/index.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  devtool: 'inline-source-map'
};