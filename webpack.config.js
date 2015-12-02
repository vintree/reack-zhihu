// webpack.config.js
var path = require("path");
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry: {
        index: './app/js/jsx/index.js',
        // 'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
        // 'webpack/hot/only-dev-server',
        // './src/js/main.js' // Your appʼs entry point
    },
    output: {
        publicPath: "http://127.0.0.1:9090/static/dist/",
        path: path.join(__dirname, 'app/js/'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', 'jsx', '.sass', '.css'],
        root: __dirname
    },
    // 新添加的module属性
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.scss$/,
            loader: "style!css!sass"
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        commonsPlugin,
    ]
};