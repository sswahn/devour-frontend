const { ProvidePlugin } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    
  mode: 'development',
  
  entry: './src/index.js',
    
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/devour-frontend/',
  },
    
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
    
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
    new ProvidePlugin({
      React: 'react',
    }),
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240
    })
  ],
    
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'] // ['.js', '.jsx', '.mjs', '.*'],
  },
    
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
  },
    
  stats: {
    errorDetails: true,
  }
}
