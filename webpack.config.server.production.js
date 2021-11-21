import crypto from 'crypto';
import path from 'path';
import boolean from 'boolean';
import dotenv from 'dotenv';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import ESLintPlugin from 'eslint-webpack-plugin';
import { createCommons } from 'simport';
import babelConfig from './babel.config.cjs.js';

const { __filename, __dirname, require } = createCommons(import.meta.url);

const pkg = require('./package.json');

const myEslintOptions = {
  extensions: [`js`, `jsx`, `ts`],
  exclude: [`node_modules`],
};

dotenv.config({
  path: path.resolve('webpack.config.server.production.env'),
});

// const USE_ESLINT_LOADER = boolean(process.env.USE_ESLINT_LOADER);
const USE_TERSER_PLUGIN = boolean(process.env.USE_TERSER_PLUGIN);

// Use publicPath for production
const payload = pkg.version;
const publicPath = ((payload) => {
  const algorithm = 'sha1';
  const buf = String(payload);
  const hash = crypto.createHash(algorithm).update(buf).digest('hex');
  return '/' + hash.substr(0, 8) + '/'; // 8 digits
})(payload);
const buildVersion = pkg.version;

export default {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  target: 'node', // ignore built-in modules like path, fs, etc.
  context: path.resolve(__dirname, 'src/server'),
  entry: {
    index: ['./index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/cncjs4marlin/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimizer: [USE_TERSER_PLUGIN && new TerserPlugin()].filter(Boolean),
  },
  plugins: [
    new webpack.DefinePlugin({
      'global.NODE_ENV': JSON.stringify('production'),
      'global.PUBLIC_PATH': JSON.stringify(publicPath),
      'global.BUILD_VERSION': JSON.stringify(buildVersion),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      chunksSortMode: 'dependency', // Sort chunks by dependency
    }),
    new ESLintPlugin(myEslintOptions),
  ],
  module: {
    rules: [
      {
        test: /\.hex$/,
        loader: 'file-loader',
      },
      {
        test: /\.hex$/,
        loader: 'file-loader',
        include: [path.resolve(__dirname, 'src/server/lib/Firmware/Flashing')],
      },
      {
        test: /\.hex$/,
        loader: 'raw-loader',
      },
      {
        test: /\.hex$/,
        loader: 'raw-loader',
        include: [path.resolve(__dirname, 'src/server/lib/Firmware/Flashing')],
      },
      {
        test: /\.txt$/,
        loader: 'file-loader',
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
        include: [path.resolve(__dirname, 'src/server/lib/Firmware/Flashing')],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: babelConfig,
        exclude: /node_modules/,
      },
    ].filter(Boolean),
  },
  externals: [nodeExternals()], // ignore all modules in node_modules folder
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  resolve: {
    fallback: {
      console: false,
      global: false,
      process: false,
      Buffer: false,

      // Use relative path
      __filename: false,

      // Use relative path
      __dirname: false,

      setImmediate: false,
    },
  },
};
