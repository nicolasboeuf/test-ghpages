const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  filenameHashing: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/test-ghpages/" : "/",
  chainWebpack:
    config => {
      config.optimization.delete('splitChunks')
    }
}
