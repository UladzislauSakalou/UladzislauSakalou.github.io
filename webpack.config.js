'use strict'

module.exports = {
    entry: "./src/js/main",
    output: {
        filename: "build.js"
    }, 

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },

    cache: true,



    devtool: "cheap-source-map",
    
    
}