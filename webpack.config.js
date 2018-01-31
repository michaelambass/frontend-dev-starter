const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './public/src/assets/js/app.js',
    output: {
    filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    },
    watch: true,
    plugins: [
      new UglifyJsPlugin({
          sourceMap: true,
          uglifyOptions: {
            ecma: 6
          }
      })
    ]
};
