'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('./express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(_express2.default).listen(process.env.PORT || 8888, function () {
  console.info('Server is listening...');
});