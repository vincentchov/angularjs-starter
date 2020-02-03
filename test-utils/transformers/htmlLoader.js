const htmlLoader = require("html-loader");

// To be used directly by Jest in place of Webpack's use of html-loader
module.exports = {
    process(src) {
        return htmlLoader(src);
    }
};
