'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile('' + defaultPath + file + '.json', 'utf-8', function (err, data) {
      if (err) reject(err);
      var obj = JSON.parse(data);
      resolve(obj);
    });
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPath = 'app/data/';