import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildRules } from './buildRules'
import { type Options } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfiguration (options: Options): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    module: {
      rules: buildRules(options)
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
