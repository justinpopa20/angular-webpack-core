const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('../helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts',
        'styles': './src/global.scss'
    },

    resolve: {
        extensions: [
            '.js', '.ts'
        ]
    },

    module: {
        rules: [{
                enforce: 'pre',
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnHint: true,
                    configFile: helpers.root('config', 'tslint.json')
                }
            },
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader?configFileName=config/tsconfig.json', 'angular2-template-loader', '@angularclass/hmr-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, helpers.root('src', 'global.scss')],
                use: ['to-string-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /global\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)esm5/,
            helpers.root('src'), {}
        ),

        new StyleLintPlugin({
            configFile: '.stylelintrc',
            syntax: 'scss'
        })
    ]
};