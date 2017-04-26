'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controllers = require('./controllers');

exports.default = function (app) {
  app.route('/auth').post(_controllers.authController);
  app.route('/find').get(_controllers.findController);
  app.route('/shapes/:id').get(_controllers.shapesController);
  app.route('/trips/:tripId*?').get(_controllers.tripsController);
};