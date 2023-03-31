const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const myEslintOptions = {
  extensions: [`js`, `jsx`, `ts`], //vue
  exclude: [`node_modules`],
};

const DEVELOPMENT_MODE = 'development';
const PRODUCTION_MODE = 'production';
const isProduction =
  process.argv.indexOf('production') >= 0 || process.env.NODE_ENV === PRODUCTION_MODE;

const SRC_PATH = path.join(__dirname, './src');
const DIST_PATH = path.join(__dirname, './build');

module.exports = {
  // stats: {warnings:false},
  context: SRC_PATH,
  entry: './index.ts',
  output: {
    filename: 'js/app.bundle.js',
    publicPath: isProduction ? '/V3/HTTP/S3/LB/public/' : '/',
    path: DIST_PATH,
    //hashFunction: require('metrohash').MetroHash64 //potential workaround for nodejs 18 ssl issue for error0308010cdigital-envelope-routinesunsupported
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      '~': path.resolve(__dirname, SRC_PATH),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/] },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
              },
              sourceMap: !isProduction,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(ts|vue)$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //     },
      //   ],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]',
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
    new CleanWebpackPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: "'development'",
    //   },
    // }),
    new HtmlWebpackPlugin({
      title: 'LogLeads',
      //favicon: "./assets/images/favicon.ico",
      template: `${__dirname}/template.html`,
      filename: 'index.html',
      inject: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: "./assets/images/favicon.ico", to: "images/favicon.ico" },
        { from: "./assets/images/Okta.png", to: "images/Okta.png" },
        { from: "./assets/images/Google.png", to: "images/Google.png" },
        { from: "./assets/images/Aws.png", to: "images/Aws.png" },
        { from: "./assets/images/background.png", to: "images/background.png" }
      ],
    }),
    new VueLoaderPlugin(),
    new Dotenv({
      systemvars: true,
      safe: true,
    }),
  ],
};
