import crypto from 'crypto';
import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import ESLintPlugin from 'eslint-webpack-plugin';
import { createCommons } from 'simport';

const { __filename, __dirname, require } = createCommons(import.meta.url);

const pkg = require('./package.json');
const babelConfig = require('./babel.config.json');

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

export default {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  target: 'node', // ignore built-in modules like path, fs, etc.
  context: path.resolve(__dirname, 'src/server'),
  entry: {
    index: ['./index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'output/server'),
    chunkFilename: `[id].[name].js`,
    chunkFormat: 'module',
    chunkLoading: 'import',
    filename: `[name].js`,
    pathinfo: true,
    publicPath: publicPath,
    clean: true,
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: true,
      // The environment supports BigInt as literal (123n).
      bigIntLiteral: false,
      // The environment supports const and let for variable declarations.
      const: true,
      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: true,
      // The environment supports an async import() function to import EcmaScript modules.
      dynamicImport: true,
      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: true,
      // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
      module: true,
    },
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
    extensions: ['.js', '.jsx', '.cjs', '.mjs'],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  node: {
    __filename: true, // Use relative path
    __dirname: true, // Use relative path
    global: true,
  },
  experiments: {
    asyncWebAssembly: true,
    // buildHttp: true,
    layers: true,
    lazyCompilation: true,
    outputModule: true,
    syncWebAssembly: true,
    topLevelAwait: true,
  },
};
