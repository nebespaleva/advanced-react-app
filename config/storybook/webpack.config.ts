import webpack, {DefinePlugin, RuleSetRule} from "webpack";
import { buildCssLoader } from "../loaders/buildCssLoader";
import { WebpackPaths } from "../build/types/config";
import { buildSvgLoader } from "../loaders/buildSvgLoader";
import path from "path";

export default ({config}: {config: webpack.Configuration}) => {
    const paths: WebpackPaths = {
        entry: '',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/.svg/.test(rule.test as string)) {
            return {...rule, exclude: /.svg$/i}
        }

        return rule;
    })

    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoader(true));

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true
    }));

    return config;
}