const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");
const dotenv = require("dotenv-webpack");

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "src", "typescript", "app.ts"),
    watch: true,
    output: {
        path: path.join(__dirname, "dist", "js"),
        publicPath: "/dist/js/",
        filename: "bundle.js",
        chunkFilename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /.ts?$/,
                include: [path.resolve(__dirname, "src", "typescript")],
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    // devtool: "none",
    devServer: {
        static: {
            directory: path.join(__dirname, "/"),
        },
        liveReload: true,
    },
    plugins: [new cleanPlugin.CleanWebpackPlugin(), new dotenv()],
};
