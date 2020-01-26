const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: {},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/app\/lib/, /node_modules/],
                use: ["babel-loader"]
            },
            { test: /\.html$/, use: [{ loader: "raw-loader" }] },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.woff/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name:
                                "?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: [/\.ttf/, /\.eot/, /\.svg/],
                use: [
                    {
                        loader: "file-loader",
                        options: { name: "?prefix=font/&name=assets/[hash].[ext]" }
                    }
                ]
            }
        ]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: "client/index.html",
            inject: "body",
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.SplitChunksPlugin({
            name: "vendor",
            minChunks: function(module, count) {
                return (
                    module.resource &&
                    module.resource.indexOf(path.resolve(__dirname, "client")) === -1
                );
            }
        })
    ]
};
