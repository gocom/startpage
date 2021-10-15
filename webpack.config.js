const webpack = require('webpack');
const ejs = require('ejs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { version } = require('./package.json');

function transformHtml(content) {
  return ejs.render(content.toString(), {
    ...process.env,
  });
}

/**
 * @type {object}
 */
const config = {
  devtool: false,
  mode: process.env.NODE_ENV || 'production',
  context: path.join(__dirname, 'src'),
  entry: {
    './main': './main.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src'),
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts/',
        },
      },
    ],
  },
  plugins: [
    new GoogleFontsPlugin(path.join(__dirname, 'src/fonts.json')),
    new webpack.DefinePlugin({
      global: 'window',
    }),
    new webpack.SourceMapDevToolPlugin({}),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets',
          to: 'assets',
          globOptions: {
            ignore: [
              '**/.*',
            ],
          },
        },
        {
          from: 'index.html',
          to: 'index.html',
          transform: transformHtml,
        },
        {
          from: 'manifest.json',
          to: 'manifest.json',
          transform: (content) => {
            const jsonContent = JSON.parse(content);

            jsonContent.version = version;

            if (config.mode === 'development') {
              jsonContent.content_security_policy = "script-src 'self' 'unsafe-eval'; object-src 'self'";
            }

            return JSON.stringify(jsonContent, null, 2);
          },
        },
      ],
    }),
  ],
  performance: {
    hints: false,
  },
  stats: {
    children: false,
    chunks: false,
    colors: true,
    hash: false,
    entrypoints: true,
    modules: false,
    performance: false,
  },
  devServer: {
    port: 12598,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCssAssetsPlugin(),
    ],
    usedExports: true,
    removeAvailableModules: true,
  },
};

if (config.mode === 'production') {
  config.devtool = false;

  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ]);
}

module.exports = config;
