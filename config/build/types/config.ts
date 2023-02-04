export type WebpackMode = "production" | "development"

export type WebpackPaths = {
    entry: string;
    output: string;
    html: string;
}

export interface Options {
    mode: WebpackMode,
    paths: WebpackPaths,
    isDev: boolean,
    port: number,
}

export interface EnvBuild {
    mode: WebpackMode,
    port: number,
}