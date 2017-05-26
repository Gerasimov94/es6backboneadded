const {HotModuleReplacementPlugin, NamedModulesPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const autoprefixer = require( 'autoprefixer' );
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const postcssAutoprefixer = {
	loader: 'postcss-loader',
	options: {
		ident: 'postcss',
		plugins: () => [autoprefixer],
	},
};

const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', postcssAutoprefixer, 'sass-loader'],
    publicPath: '/dist',
});

const cssConfig = isProduction ? cssProd : cssDev;

const sourceMap = isProduction ? false :'cheap-module-eval-source-map';


module.exports = {
    entry: './src/app/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devtool: sourceMap,

    resolve: {
        alias: {
		    'src': path.resolve('src/')
        }
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['stage-0']
                    }
                }]
            },
            
            {
                test: /\.html$/,
                loader: "underscore-template-loader",
                query: {
                    prependFilenameComment: __dirname,
                }
            }
        
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: 'minimal',
        hot: true,
        open: true
    },

    plugins: [

        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: !isProduction,
            allChunks:  true
        }),

        new WebpackNotifierPlugin({
            title: 'webpack',
            alwaysNotify: true,
        }),

        new HotModuleReplacementPlugin(),
        new NamedModulesPlugin(),

        
    ],
     
}