var http = require('http');
var app = require('./express');

http.createServer(app).listen(process.env.PORT || 8888);
