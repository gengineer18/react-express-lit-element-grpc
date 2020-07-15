const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const path = require('path')
const dist = path.resolve(__dirname, '../dist')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/client/index.html',
  filename: './index.html',
  alwaysWriteToDisk: true,
  minify: false
});

const htmlWebpackHarddiskPlugin = new HtmlWebpackHarddiskPlugin({
  outputPath: dist
})
//  module.exports = {
//   entry: './src/client/index.js',
//   output: {
//     path: path.resolve('dist'),
//     filename: '[name].js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }
//     ]
//   },
//   plugins: [htmlWebpackPlugin]
// };
module.exports = {
  entry: './src/client/index.tsx',
  output: {
    path: dist,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin, htmlWebpackHarddiskPlugin]
};
