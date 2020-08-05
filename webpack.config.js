const path = require('path'); // <- save path to directory
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // A webpack plugin to remove/clean your build folder(s).
const HTMLWebpackPlugin = require('html-webpack-plugin'); // HTML files to serve your webpack bundles
const CopyPlugin = require('copy-webpack-plugin');
// ^ Copies individual files or entire directories, which already exist, to the build directory.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //  plugin extracts CSS into separate files

// part marks mode type
const isProd = process.env.NODE_ENV === 'production'; // variable defining Node build mode production
const isDev = !isProd; // same as isProd but for development
const jsLoader = () => {
    const loaders = [
        {
            loader: 'babel-loader', // babel set
            options: { // babel preset
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
    ];
    if (isDev) {
        loaders.push('eslint-loader');
    }
};
console.log('Is Prod', isProd); // test lines:
console.log('Is DEV', isDev);

const bundleFilename = (ext) => isDev ? `Bundle.${ext}` : `Bundle.[hash].${ext}`;
// ^ return filenames dev/prod for js,css

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'], // entry points array
    output: {
        filename: bundleFilename('js'), // add hash, reject cash problems
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js'], // js, json default extensions, this only .js use
        alias: { // alias for import or require modules by property resolve alias
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        },
    },
    devtool: isDev ? 'source-map' : false, // default original source for dev mode
    devServer: { // ad configuration dev server
        port: 4000,
        hot: isDev, // webpack's Hot Module Replacement feature
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({ // set properties html web plugin
            template: 'index.html',
            minify: { // minification html
                removeComments: isProd, // put obj if isProd (true) , remove comments in Prod mode from html
                collapseWhitespace: isProd, // remove whitespaces from html
            },
        }),
        new CopyPlugin({
            patterns: [
                    // copy favicon
                    {from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist')},
                ],
            }),
        new MiniCssExtractPlugin({
            filename: bundleFilename('css'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev, // hot module replacement
                            reloadAll: true, // reload all flag
                        },
                    },
                    // MiniCssExtractPlugin.loader, // loader static css
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoader(),

            },
        ],
    },
};

