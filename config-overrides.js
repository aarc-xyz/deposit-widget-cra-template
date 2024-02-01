const webpack = require("webpack")
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
        zlib: require.resolve('browserify-zlib'),
        path: require.resolve("path-browserify"),
    }
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
            stream: "stream-browserify",

        }),
    ]

    config.module.rules.unshift({
        test: /\.m?js$/,
        resolve: {
            fullySpecified: false, // disable the behavior
            "alias": {
                assert: 'assert',
                buffer: 'buffer',
                crypto: 'crypto-browserify',
                http: 'stream-http',
                https: 'https-browserify',
                os: 'os-browserify/browser',
                process: 'process/browser',
                stream: 'stream-browserify',
                util: 'util',
                url: 'url'
            },

        },

    });
    // console.log(config.resolve)
    // console.log(config.plugins)
    return config
}