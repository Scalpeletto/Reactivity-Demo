const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDevEnv = require('./isDevEnv');
const paths = require('./paths');

module.exports = {
  context: paths.src,
  entry: [path.resolve(paths.src, 'App.tsx')],
  target: 'web',
  resolve: {
    alias: {
      '@': paths.src,
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [
    // https://www.npmjs.com/package/webpack-bundle-analyzer
    new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: isDevEnv
        ? path.resolve(paths.reports, 'webpack-analysis-dev.html')
        : path.resolve(paths.reports, 'webpack-analysis-prod.html'),
      openAnalyzer: false,
    }),
    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
      hash: true,
      favicon: path.resolve(paths.src, 'assets/images/favicon.png'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: [paths.src],
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/,
        type: 'asset',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(pdf|txt|doc)$/,
        type: 'asset',
        generator: {
          filename: 'documents/[hash][ext][query]',
        },
      },
      {
        test: /\.css$/,
        use: [
          isDevEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDevEnv } },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          isDevEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDevEnv } },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevEnv,
              additionalData: (content, loaderContext) => {
                const { resourcePath, rootContext } = loaderContext;
                const relativePath = path.relative(rootContext, resourcePath);
                if (relativePath !== 'src/style/_variables.scss') {
                  return `
                                        @import "@/style/_variables.scss";
                                        ${content}
                                    `;
                }
                return content;
              },
            },
          },
        ],
      },
    ],
  },

};
