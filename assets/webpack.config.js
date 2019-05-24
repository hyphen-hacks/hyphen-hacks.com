const path = require('path');

module.exports = {
    entry: {
        home: path.join(__dirname, 'src/home.js'),
        common: path.join(__dirname, 'src/common.js'),
        listSignup: path.join(__dirname, 'src/list-signup.js'),
        // css: path.join(__dirname, 'sass/main.scss')
    },

    // module: {
    //     rules: [
    //         {
    //             test: /\.scss$/,
    //             use: ['style-loader', 'postcss-loader', 'sass-loader']
    //         }
    //     ]
    // }
};
