var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        app: './react-js/app'
    },

    output: {
        path: __dirname + '/react-js/js/public',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: __dirname + '/react-js',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    resolve: {
        alias: {
            'tic-tac-toe': __dirname + '/core/game'
        }
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
