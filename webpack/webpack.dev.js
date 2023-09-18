const merge = require('webpack-merge');
const webpack = require('webpack');

const paths = require('./paths');
const commonConfig = require('./webpack.common');

module.exports = merge.merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    output: {
        path: paths.build,
        publicPath: "/",
        filename: 'scripts/[id].bundle.js',
        clean: true,
    },
    // https://webpack.js.org/configuration/optimization/
    optimization: {
        runtimeChunk: 'single'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        compress: true,
        static: { directory: paths.build, publicPath: "/" },
        historyApiFallback: true,
        hot: true,
        port: 8080,
    }
})