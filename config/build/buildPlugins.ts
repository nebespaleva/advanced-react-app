import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {WebpackPaths} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ html }: WebpackPaths, isDev: boolean): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        })
    ]
}