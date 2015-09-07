
// 使用webpack打包
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build/build.js",
	path: __dirname
  },
  module: {
    loaders: [
	  {test: /\.js$/, loader: 'babel', exclude: '/node_modules/'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};