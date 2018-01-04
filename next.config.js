const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const { ANALYZE, ASSET_HOST } = process.env

// for those who using CDN
const assetPrefix = ASSET_HOST || 'http://localhost:3100'

module.exports = {
  assetPrefix,
  webpack: (config, { dev }) => {

    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    // https://github.com/zeit/next.js/issues/3184
    config.plugins = config.plugins.filter(p =>
      p.constructor.name !== 'UglifyJsPlugin'
    )

    if(!dev) {
      const Uglify = require('uglifyjs-webpack-plugin')
      config.plugins.push(
        new Uglify({
          parallel: true,
          cache: true,
          sourceMap: true
        })
      )
    }

    if(ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    config.module.rules.push({
      test: /\.css/,
      use: [{
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
        'babel-loader',
        'styled-jsx-css-loader', {
        loader: 'postcss-loader',
        options: { sourceMap: dev }
      }]
    })

    return config
  }
}
