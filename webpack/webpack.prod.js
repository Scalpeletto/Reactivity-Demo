const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const paths = require('./paths');
const commonConfig = require('./webpack.common');

module.exports = merge.merge(commonConfig, {
  mode: 'production',
  output: {
    path: paths.build,
    publicPath: "/",
    filename: 'scripts/[id].bundle.js',
    clean: true,
  },
  optimization: {
    mangleWasmImports: true,
    moduleIds: 'deterministic',
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      '...'
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      enforceSizeThreshold: 20000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        styles: {
          test: /\.css$/,
          name: 'styles',
          enforce: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        
      },
    },
  },
  plugins: [
    // https://webpack.js.org/plugins/mini-css-extract-plugin/
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkhash].css',
    }),
  ]
})