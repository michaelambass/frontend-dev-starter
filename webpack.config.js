const path = require('path');

module.exports = {
    entry: './public/src/assets/js/app.js',
    watch: true,
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
    }
};
