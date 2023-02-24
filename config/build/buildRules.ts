import type webpack from 'webpack'
import { type Options } from './types/config'
import { buildCssLoader } from "../loaders/buildCssLoader";
import { buildSvgLoader } from "../loaders/buildSvgLoader";

export function buildRules (options: Options): webpack.RuleSetRule[] {
  const fileRules = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const svgRules = buildSvgLoader();

  const scssRules = buildCssLoader(options.isDev)

  const typescriptRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    fileRules,
    svgRules,
    typescriptRule,
    scssRules
  ]
}
