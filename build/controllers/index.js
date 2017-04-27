'use strict';

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _shapes = require('./shapes');

var _shapes2 = _interopRequireDefault(_shapes);

var _trips = require('./trips');

var _trips2 = _interopRequireDefault(_trips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  authController: _auth2.default,
  findController: _find2.default,
  shapesController: _shapes2.default,
  tripsController: _trips2.default
};