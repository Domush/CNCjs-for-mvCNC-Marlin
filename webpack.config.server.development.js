const crypto = require('crypto');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const babelConfig = require('./babel.config');
const pkg = require('./package.json');

const myEslintOptions = {
  extensions: [`js`, `jsx`, `ts`],
  exclude: [`node_modules`],
};

// Use publicPath for production
const payload = pkg.version;
const publicPath = ((payload) => {
  const algorithm = 'sha1';
  const buf = String(payload);
  const hash = crypto.createHash(algorithm).update(buf).digest('hex');
  return '/' + hash.substr(0, 8) + '/'; // 8 digits
})(payload);
const buildVersion = pkg.version;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  target: 'node', // ignore built-in modules like path, fs, etc.
  context: path.resolve(__dirname, 'src/server'),
  entry: {
    index: ['./index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'output/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({
      'global.NODE_ENV': JSON.stringify('development'),
      'global.PUBLIC_PATH': JSON.stringify(publicPath),
      'global.BUILD_VERSION': JSON.stringify(buildVersion),
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
        include: [path.resolve(__dirname, 'src/server/lib/FirmwareFlashing')],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: babelConfig,
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()], // ignore all modules in node_modules folder
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true, // Use relative path
    __dirname: true, // Use relative path
    setImmediate: true,
  },
};
