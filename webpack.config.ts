import path from 'path';
import {buildWebpackConfiguration} from "./config/build/buildWebpackConfiguration";
import {EnvBuild, Options} from "./config/build/types/config";

module.exports = (env: EnvBuild) => {
    const mode = env.mode || "development";
    const PORT = env.port || 3000;
    const isDev = mode === 'development';

    const options: Options = {
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
        },
        isDev,
        port: PORT,
    }

    return buildWebpackConfiguration(options);
}