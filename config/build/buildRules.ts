import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Options} from "./types/config";

export function buildRules(options: Options):webpack.RuleSetRule[] {
    const fileRules = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        };

    const svgRules = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
            },
        ],
    }

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
        fileRules,
        svgRules,
        typescriptRule,
        scssRules,
    ]
}