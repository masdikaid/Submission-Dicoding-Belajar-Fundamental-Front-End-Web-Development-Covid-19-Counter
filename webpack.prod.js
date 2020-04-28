const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common,{
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ],
                exclude: "/node_modules/" 
            }
        ]
    },
    mode: "production"

})
    