'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var file = './src/vendor/shapes.txt';

function buildResponse(req, shapes) {
  var id = req.params.id;
  if (id) {
    return shapes.filter(function (item) {
      return item.shape_id === id;
    });
  }
  return shapes;
}

exports.default = function (req, res) {
  return (0, _helpers.csvToJson)(file).then(function (shapes) {
    return res.send(buildResponse(req, shapes));
  }).catch(function (err) {
    return res.send(err);
  });
};