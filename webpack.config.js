var webpack = require('webpack');

var environment = process.env.NODE_ENV || 'development';

var plugins = environment === 'production' ? [
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify(environment)
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
] : [];

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
                loader: 'babel'
            },
            {
                test: /\.js$/,
                include: __dirname + '/core',
                loader: 'babel'
            }
        ]
    },

    plugins: plugins
};
