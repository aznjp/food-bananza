const path = require("path");

module.exports = {
    // The three properties to configure the webpack module
    // Entry will give a relative path to the client code (i.e. the javascript code)
    entry: './assets/js/script.js',
    // This code will then be bundled and sent to a new file name main.bundle.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // For now we want them to run in the development mode and the webpack will automatically generally run in production mode
    mode: 'development'
};