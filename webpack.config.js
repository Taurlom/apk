/*
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var jQuery = require("jquery");

module.exports = {
    output: {
        filename: "bundle.js",
        publicPath: '/assets/js/'
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }),
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
            // {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    }
};


*/


var webpack = require('webpack');
var jQuery = require("jquery");


module.exports = {
    devtool: '#source-map',
    output: {
        filename: "bundle.js"
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),
        new webpack.optimize.DedupePlugin()
    ]
    
};