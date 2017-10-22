
const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')

const routes = require('../routes')

const port = parseInt(process.env.PORT, 10) || 3100
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler()

app.prepare().then(() => {

  const server = express()

  server.use(compression())
  server.get('*', (req, res) => {
    return handler(req, res)
  })

  startServer()

  function startServer() {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  }
})
