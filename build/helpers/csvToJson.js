'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _nodeCsvParse = require('node-csv-parse');

var _nodeCsvParse2 = _interopRequireDefault(_nodeCsvParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseData = function parseData(data) {
  return (0, _nodeCsvParse2.default)(data).asObjects();
};

exports.default = function (file) {
  return new Promise(function (resolve, reject) {
    return _fs2.default.readFile(file, 'utf8', function (err, data) {
      if (err) return reject(err);
      return resolve(parseData(data));
    });
  });
};