'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var file = './src/vendor/stop_times.txt';

function buildResponse(req, stops) {
  var id = req.params.id;
  if (id) {
    return stops.filter(function (item) {
      return item.stop_id === id;
    });
  }
  return stops;
}

exports.default = function (req, res) {
  return (0, _helpers.csvToJson)(file).then(function (stops) {
    return res.send(buildResponse(req, stops));
  }).catch(function (err) {
    return res.send(err);
  });
};