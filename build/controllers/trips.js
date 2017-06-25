'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var file = './src/vendor/trips.txt';

function buildResponse(req, stops) {
  var id = req.params.id;
  if (id) {
    return stops.filter(function (item) {
      return item.trip_id === id;
    });
  }
  return stops;
}

exports.default = function (req, res) {
  return (0, _helpers.csvToJson)(file).then(function (trips) {
    return res.send(buildResponse(req, trips));
  }).catch(function (err) {
    return res.send(err);
  });
};