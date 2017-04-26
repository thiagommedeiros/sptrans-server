'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file) {
  return new Promise(function (resolve) {
    var stream = _fs2.default.createReadStream('' + defaultPath + file + '.json', { encoding: 'utf8' });
    var parser = _JSONStream2.default.parse();

    stream.pipe(parser);

    parser.on('data', function (obj) {
      resolve(obj);
    });
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _JSONStream = require('JSONStream');

var _JSONStream2 = _interopRequireDefault(_JSONStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPath = 'app/data/';