const removeExtraCode = require('./plugin');
const {DefinePlugin} = require('webpack');
const stringifiedEnv = JSON.stringify(process.env);
console.log(stringifiedEnv)
const path = require("path");
module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
        libraryTarget: 'umd'
    },
    plugins:[
        new removeExtraCode(),
        // new DefinePlugin({'process.env': stringifiedEnv})
    ]
};
