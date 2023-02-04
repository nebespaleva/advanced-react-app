import webpack from "webpack";
import {Options} from "./types/config";

export function buildResolvers(options: Options): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules']
    }
}