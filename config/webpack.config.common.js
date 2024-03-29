'use strict';

const {VueLoaderPlugin}      = require('vue-loader');
const HtmlPlugin           = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const helpers              = require('./helpers');
const isDev                = process.env.NODE_ENV === 'development';

const webpackConfig = {
    entry: {
        polyfill: '@babel/polyfill',
        main: helpers.root('src', 'main'),
    },
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': helpers.root('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [ helpers.root('src') ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [ helpers.root('src') ]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'postcss-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|mp4|pdf)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader',
                options: {
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: 'index.html',
            chunksSortMode: 'dependency'
        })
    ]
};
module.exports = webpackConfig;