const { ProvidePlugin } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    
  mode: 'development',
  
  entry: './src/index.js',
    
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/devour-frontend/',
    clean: true
  },
    
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: false }],
              "@babel/preset-react"
            ],
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
    new ProvidePlugin({ React: 'react' })
  ],
    
  resolve: {
    extensions: ['.js', '.jsx'] // ['.js', '.jsx', '.mjs', '.*'],
  },
    
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
  },
    
  stats: {
    errorDetails: true,
  }
}
