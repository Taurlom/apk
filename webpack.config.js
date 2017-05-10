var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var jQuery = require("jquery");

module.exports = {
    output: {
        filename: "bundle.js",
        publicPath: '/dist/js/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),
        new webpack.optimize.DedupePlugin()
    ],
    devtool: '#source-map',
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$'
            }
        ]
    },
    externals: {
        "jquery": "jQuery"
    }
};


