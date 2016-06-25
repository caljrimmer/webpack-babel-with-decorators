var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/lib',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: [
                        'transform-decorators-legacy'
                    ],
                    presets: ['es2015', 'stage-1', 'stage-2']
                }
            }
        ]
    }
};