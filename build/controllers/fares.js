'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var file = './src/vendor/fare_attributes.txt';

exports.default = function (req, res) {
  return (0, _helpers.csvToJson)(file).then(function (fares) {
    return res.send(fares);
  }).catch(function (err) {
    return res.send(err);
  });
};