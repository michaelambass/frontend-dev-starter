const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const dev = process.env.NODE_ENV === "dev"

let config = {
    entry: './public/src/assets/js/app.js',
    watch: dev,
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: []
};

if (!dev) {
    config.plugins.push(new UglifyJsPlugin())
}
module.exports = config
