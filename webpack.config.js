const path = require('path'); // <- save path to directory
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // A webpack plugin to remove/clean your build folder(s).
const HTMLWebpackPlugin = require("html-webpack-plugin"); // HTML files to serve your webpack bundles
const CopyPlugin = require('copy-webpack-plugin');
// ^ Copies individual files or entire directories, which already exist, to the build directory.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //  plugin extracts CSS into separate files

// part marks mode type
const isProd = process.env.NODE_ENV === "production";   // variable defining Node build mode production
const isDev = !isProd;  // same as isProd but for development

console.log('Is Prod', isProd)
console.log('Is DEV', isDev)

const bundleFilename = (ext) => isDev ? `Bundle.${ext}` : `Bundle.[hash].${ext}` // return filenames dev/prod for js,css

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: "./index.js",
    output: {
        filename: bundleFilename('js'), // add hash, reject cash problems
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'], // js, json default extensions, this only .js use
        alias: {  // alias for import or require modules by property resolve alias
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({     // set properties html web plugin
            template: "index.html",
            minify: {      // minification html
                removeComments: isProd,  // put obj if isProd (true) , remove comments in Prod mode from html
                collapseWhitespace: isProd, // remove whitespaces from html
            }
        }),
        new CopyPlugin({
            patterns: [
                    // copy favicon
                    { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist') },
                ],
            }),
        new MiniCssExtractPlugin({
            filename: bundleFilename('css'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                   MiniCssExtractPlugin.loader, // loader static css
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,              // babel set
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {    // babel preset
                    presets: [ '@babel/preset-env']
                }
            }
        ],
    },
}

