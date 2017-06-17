import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next()
})
app.use(bodyParser.json())

routes(app)

http.createServer(app).listen(process.env.PORT || 8888, function () {
  console.info(`Server is listening on port: ${this.address().port}`)
})
