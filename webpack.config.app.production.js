import crypto from 'crypto';
import path from 'path';
import boolean from 'boolean';
import dotenv from 'dotenv';
import _CSSSplitWebpackPlugin from 'css-split-webpack-plugin';
import { createCommons } from 'simport';
import findImports from 'find-imports';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import without from 'lodash/without';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import nib from 'nib';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import stylusLoader from 'stylus-loader';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import babelConfig from './babel.config.json';
import buildConfig from './build.config.cjs';

const { __filename, __dirname, require } = createCommons(import.meta.url);

const CSSSplitWebpackPlugin = _CSSSplitWebpackPlugin.default;
const pkg = require('./package.json');

const myEslintOptions = {
  extensions: [`js`, `jsx`, `ts`],
  exclude: [`node_modules`],
};

dotenv.config({
  path: path.resolve('webpack.config.app.production.env'),
});

// const USE_ESLINT_LOADER = boolean(process.env.USE_ESLINT_LOADER);
const USE_TERSER_PLUGIN = boolean(process.env.USE_TERSER_PLUGIN);
const USE_OPTIMIZE_CSS_ASSETS_PLUGIN = boolean(process.env.USE_OPTIMIZE_CSS_ASSETS_PLUGIN);

// Use publicPath for production
const publicPath = ((payload) => {
  const algorithm = 'sha1';
  const buf = String(payload);
  const hash = crypto.createHash(algorithm).update(buf).digest('hex');
  return '/' + hash.substr(0, 8) + '/'; // 8 digits
})(pkg.version);
const buildVersion = pkg.version;
const timestamp = new Date().getTime();

export default {
  mode: 'production',
  cache: true,
  target: 'web',
  context: path.resolve(__dirname, 'src/app'),
  devtool: 'cheap-module-source-map',
  entry: {
    polyfill: [path.resolve(__dirname, 'src/app/polyfill/index.js')],
    vendor: findImports(['src/app/**/*.{js,jsx}', '!src/app/polyfill/**/*.js', '!src/app/**/*.development.js'], {
      flatten: true,
    }),
    app: [path.resolve(__dirname, 'src/app/index.jsx')],
  },
  output: {
    path: path.resolve(__dirname, 'dist/cncjs4marlin/app'),
    chunkFilename: `[name].[chunkhash].bundle.js?_=${timestamp}`,
    filename: `[name].[chunkhash].bundle.js?_=${timestamp}`,
    publicPath: publicPath,
  },
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
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              camelCase: true,
              importLoaders: 1,
            },
          },
          'stylus-loader',
        ],
        exclude: [path.resolve(__dirname, 'src/app/styles')],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
              camelCase: true,
            },
          },
          'stylus-loader',
        ],
        include: [path.resolve(__dirname, 'src/app/styles')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
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
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },
    ].filter(Boolean),
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  optimization: {
    minimizer: [
      USE_TERSER_PLUGIN && new TerserPlugin(),
      USE_OPTIMIZE_CSS_ASSETS_PLUGIN && new OptimizeCSSAssetsPlugin(),
    ].filter(Boolean),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BUILD_VERSION: JSON.stringify(buildVersion),
        LANGUAGES: JSON.stringify(buildConfig.languages),
        // TRACKING_ID: JSON.stringify(buildConfig.analytics.trackingId),
      },
    }),
    new stylusLoader.OptionsPlugin({
      default: {
        // nib - CSS3 extensions for Stylus
        use: [nib()],
        // no need to have a '@import "nib"' in the stylesheet
        import: ['~nib/lib/nib/index.styl'],
      },
    }),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      new RegExp('^./(' + without(buildConfig.languages, 'en').join('|') + ')$')
    ),
    // Generates a manifest.json file in your root output directory with a mapping of all source file names to their corresponding output file.
    new ManifestPlugin({
      fileName: 'manifest.json',
    }),
    new MiniCssExtractPlugin({
      filename: `[name].css?_=${timestamp}`,
      chunkFilename: `[id].css?_=${timestamp}`,
    }),
    new CSSSplitWebpackPlugin({
      size: 4000,
      imports: '[name].[ext]?[hash]',
      filename: '[name]-[part].[ext]?[hash]',
      preserve: false,
    }),
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency', // Sort chunks by dependency
    }),
    new ESLintPlugin(myEslintOptions),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
};
