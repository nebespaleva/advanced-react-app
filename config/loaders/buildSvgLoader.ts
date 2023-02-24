export const buildSvgLoader = () => {
    return {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack'
            }
        ]
    }
}