import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type WebpackPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins ({ html }: WebpackPaths, isDev: boolean): webpack.WebpackPluginInstance[] {
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
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new ReactRefreshPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
}
