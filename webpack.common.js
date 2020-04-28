const path = require('path')
const htmlWebPack = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
        ]
    },
    plugins: [
        new htmlWebPack(
            {
                template: "./src/index.html",
                filename: "index.html"
            }
        )
    ],
    mode: "development"
}