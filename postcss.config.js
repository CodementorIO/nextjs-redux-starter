
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-assets')({
      baseUrl: process.env.ASSET_HOST || 'http://localhost:3100',
      loadPaths: ['./static/'],
      cachebuster: true,
      cache: true
    }),
    require('postcss-nested-ancestors'),
    require('postcss-nested')
  ]
}
