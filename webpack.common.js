const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name]-[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, './src'), 'index.html')
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        resolve: {
          extensions: ['.tsx', '.ts', '.js']
        },
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(jpg|png|gif|svg|woff|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
