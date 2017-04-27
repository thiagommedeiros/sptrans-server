'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res) {
  (0, _helpers.getData)('shapes').then(function (shapes) {
    var id = req.params.id;
    var response = shapes.filter(function (item) {
      return item.shape_id === id;
    });
    res.send(response);
  }).catch(function (err) {
    res.send(err);
  });
};

var _helpers = require('../helpers');