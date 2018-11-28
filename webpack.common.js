const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": {
                                            "browsers": [
                                                "last 2 versions",
                                                "IE >= 11"
                                            ]
                                        }
                                    }
                                ]
                            ],
                            plugins: [
                                [
                                    "@babel/plugin-syntax-dynamic-import"
                                ]
                            ]
                        }
                    },
                    {
                        loader: path.resolve(__dirname, 'loaders/custom-loader.js')
                    }
                ]
            }
        ]
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html'
        })
        // new HtmlWebpackPlugin({
        //     filename: './test.html',
        //     template: './src/html/index.html'
        //   })
    ]
};