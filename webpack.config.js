var webpack = require('webpack');

var config = {

    output: {
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                exclude: /(node_modules|bower_components|vendor|vendors)/,
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    ]
}

module.exports = config;