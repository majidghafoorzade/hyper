const path = require("path");


module.exports = (env) => {
  return {
    mode: 'production',
    entry: `./src/${env}/index.ts`,
    target: env === 'server' ? 'node' : 'web',
    output: {
      path: path.resolve(__dirname, `build/${env}`),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '*'],
    },
  }
}
