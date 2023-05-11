import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type Options } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins (
    options: Options
): webpack.WebpackPluginInstance[] {
  const { paths: { html }, isDev, apiUrl } = options
  const plugins = [
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
      __API__: JSON.stringify(apiUrl)
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }

  return plugins;
}
