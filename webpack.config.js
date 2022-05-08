const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.vanilla\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            url: false
                        }
                    }
                ]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin()
    ]
}