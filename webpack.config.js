const path = require('path'); // <- save path to directory
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // A webpack plugin to remove/clean your build folder(s).
const HTMLWebpackPlugin = require("html-webpack-plugin"); // HTML files to serve your webpack bundles
const CopyPlugin = require('copy-webpack-plugin');
// ^ Copies individual files or entire directories, which already exist, to the build directory.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //  plugin extracts CSS into separate files

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "bundle.[hash].js", // add hash, reject cash problems (user - hash)
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [',js'], // js, json default extensions, this only .js use
        alias: {  // alias for import or require modules by property resolve alias
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({         // set properties html web plugin
            template: "index.html",
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/favicon.io'),
                    to: path.resolve(__dirname, 'dist') },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.[hash].css'
        })
    ]
}

