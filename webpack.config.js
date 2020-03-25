const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
    const mode =
        env.dev  ? 'development' :
        env.prod ? 'production'  : ''
    
    if (mode === '') {
        throw 'must specify --env.dev or --env.prod'
    }

    return {
        mode: mode,
        entry: {
            background   : './src/background.ts',
            options      : './src/options.tsx',
            contentScript: './src/contentScript.ts',
            clientside   : './src/clientside.tsx'
        },
        output: {
            path: path.resolve(__dirname, `./dist/${mode}/`),
            publicPath: '',
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.tsx?$/,
                    loaders: [
                        'babel-loader',
                        'ts-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    loaders: [
                        'style-loader',
                        'css-loader?sourceMap'
                    ]
                },
                {
                    test: /\.s[ac]ss$/,
                    loaders: [
                        'style-loader',
                        'css-loader?sourceMap',
                        'sass-loader?sourceMap'
                    ]
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: './public/*',
                    to  : './[name].[ext]'
                },
                {
                    from: './public/static/*',
                    to  : './static/[name].[ext]'
                }
            ])
        ]
    }
}
