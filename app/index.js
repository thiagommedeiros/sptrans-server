import http from 'http'
import app from './express'

http.createServer(app).listen(process.env.PORT || 8888, () => {
  console.info('Server is listening...')
})
