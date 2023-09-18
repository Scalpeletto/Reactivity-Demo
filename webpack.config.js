const isDev = require('./webpack/isDevEnv');

if (isDev) {
    module.exports = [
        require('./webpack/webpack.dev.js')
    ];
} else {
    module.exports = [
        require('./webpack/webpack.prod.js')
    ];
}
