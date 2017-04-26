'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res) {
  (0, _helpers.getData)('trips').then(function (trips) {
    var tripId = req.params.tripId;
    var response = trips;
    if (tripId) {
      response = trips.filter(function (item) {
        if (item.trip_id.includes(tripId)) {
          return item;
        }
        return false;
      });
    }
    res.send(response);
  }).catch(function (err) {
    res.send(err);
  });
};

var _helpers = require('../helpers');