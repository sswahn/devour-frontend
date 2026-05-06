const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'

  return {
    mode: isDev ? 'development' : 'production',

    entry: './src/index.js',

    output: {
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
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
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                ['@babel/preset-react', { runtime: 'automatic' }]
              ],
              cacheDirectory: true
            }
          }
        },

        {
          test: /\.css$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(process.cwd(), 'public', 'index.html')
      }),

      !isDev && new MiniCssExtractPlugin()
    ].filter(Boolean),

    resolve: {
      extensions: ['.js', '.jsx']
    },

    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: 'single'
    },

    devServer: {
      static: {
        directory: path.join(process.cwd(), 'build')
      },
      historyApiFallback: true,
      allowedHosts: 'all',
      hot: true,
      open: true
    },

    stats: {
      errorDetails: true
    }
  }
}
