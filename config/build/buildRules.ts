import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Options} from "./types/config";

export function buildRules(options: Options):webpack.RuleSetRule[] {
    const scssRules = {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: ((resPath: string) => resPath.includes('.module.')),
                            localIdentName: options.isDev
                                ? "[path][name]__[local]--[hash:base64:5]"
                                : "[hash:base64:5]"
                        },
                    }
                },
                "sass-loader",
            ],
        };

    const typescriptRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptRule,
        scssRules,
    ]
}