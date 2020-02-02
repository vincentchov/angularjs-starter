// eslint-disable-next-line
const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.config");

config.mode = "production";
config.output = {
    filename: "[name].bundle.js",
    publicPath: "",
    path: path.resolve(__dirname, "dist")
};

config.optimization = {
    mangleWasmImports: false
};

module.exports = config;
