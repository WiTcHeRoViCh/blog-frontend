module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: './dist',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                },
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ],
                use: [ 'style-loader', 'css-loader' ]
            },
        ],
    }
};
