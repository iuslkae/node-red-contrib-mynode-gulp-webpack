import { resolve } from 'path';
import { Configuration } from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: Configuration = {
  mode: 'development',
  entry: ['./src/my-node.html.ts'],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'src/my-node.html.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

export default config;
