var http = require('http');
var app = require('./express');

http.createServer(app).listen(3000, function() {
  console.log('Server listen at: ' + this.address().port);
});
