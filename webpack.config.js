let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./app/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve('dist')
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.less/,
                use: ['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],

    devtool: 'source-map', //错误时  可以提示源码错误 不会光bundle.js显示
    devServer: {
        //配置代理跨域
        proxy:{
            '/api': 'http://localhost:3000'
        }
    }

}