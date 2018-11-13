const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        publicPath: __dirname + '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    'html-loader',
                    'pug-html-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/product.pug',
            filename: 'product.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/login.pug',
            filename: 'login.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/cart.pug',
            filename: 'cart.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/checkout.pug',
            filename: 'checkout.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/final.pug',
            filename: 'final.html'
        })
    ]
};