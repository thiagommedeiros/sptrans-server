const http = require('http')
const app = require('./express')

http.createServer(app).listen(process.env.PORT || 8888)
