const path = require("path");
// Because this plugin is built into webpack, we need to be sure we're bringing webpack's methods and properties into the config file. 
// To do this, we must do what we did earlier with the path package. 
// In the webpack.config.js file, add the following line of code above or below the require path:
const webpack = require("webpack");

module.exports = {
    // The three properties to configure the webpack module
    // Entry will give a relative path to the client code (i.e. the javascript code)
    entry: './assets/js/script.js',
    // This code will then be bundled and sent to a new file name main.bundle.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // Inside the empty array, we need to tell webpack which plugin we want to use. 
    // We're going to use the providePlugin plugin to define the $ and jQuery variables to use the installed npm package.
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    // For now we want them to run in the development mode and the webpack will automatically generally run in production mode
    mode: 'development'
};