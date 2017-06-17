'use strict';

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _shapes = require('./shapes');

var _shapes2 = _interopRequireDefault(_shapes);

var _trips = require('./trips');

var _trips2 = _interopRequireDefault(_trips);

var _stops = require('./stops');

var _stops2 = _interopRequireDefault(_stops);

var _stopTimes = require('./stop-times');

var _stopTimes2 = _interopRequireDefault(_stopTimes);

var _fares = require('./fares');

var _fares2 = _interopRequireDefault(_fares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  authController: _auth2.default,
  findController: _find2.default,
  shapesController: _shapes2.default,
  tripsController: _trips2.default,
  stopsController: _stops2.default,
  stopTimesController: _stopTimes2.default,
  faresController: _fares2.default
};