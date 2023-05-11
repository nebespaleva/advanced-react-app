export type WebpackMode = 'production' | 'development'

export interface WebpackPaths {
  entry: string
  output: string
  html: string
  src: string
}

export interface Options {
  mode: WebpackMode
  paths: WebpackPaths
  isDev: boolean
  port: number,
  apiUrl: string,
}

export interface EnvBuild {
  mode: WebpackMode
  port: number,
  apiUrl: string,
}
