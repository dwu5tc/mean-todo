// var webpack = require('webpack');
// var path = require('path');

// // module.exports???
// // learn webpack
// module.exports = {
// 	devtool: 'inline-source-map',
// 	entry: [
// 		// what???
// 		require.resolve('webpack-dev-server/client') + '?/',
// 		require.resolve('webpack/hot/dev-server')
// 		'/.src'
// 	],
// 	output: {
// 		path: path.join(__dirname, 'public'),
// 		filename: 'bundle.js'
// 	},
// 	resolve: {
// 		modules: ['node_nodules', 'src'],
// 		extensions: ['.js']
// 	},
// 	module: {
// 		rules: [
// 		{
// 			test: /\.js$/,
// 			exclude: /node_modules/,
// 			loader: 'babel',
// 			options: {
// 				presets: ['es2015']
// 			}
// 		}
// 		]
// 	},
// 	plugins: [
// 		new webpack.HotModuleReplacementPlugin(),
// 		new webpack.NoErrorsPlugin()
// 	],
// 	devServer: {
// 		hot: true,
// 		proxy: {
// 			'*': 'http://localhost:3000'
// 		}
// 	}
// }

var webpack = require('webpack');
var path = require('path');

// module.exports???
// learn webpack???
// check each of these???
module.exports = {
	devtool: 'inline-source-map',
	entry: [
		// what???
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		// __dirname and path.join???
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extension: ['', '.js']
	},
	module: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			options: {
				presets: ['es2015']
			}
		}
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devServer: {
		hot: true,
		proxy: {
			'*': 'http://localhost:3000'
		}
	}
}