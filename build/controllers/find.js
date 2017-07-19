'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var endpoint = 'http://api.olhovivo.sptrans.com.br/v2.1';

function find(req, res) {
  var params = req.query;
  var auth = params.auth;
  var route = params.route;
  var url = endpoint + route;
  delete params.route;

  var config = {
    method: 'get',
    url: url,
    headers: { Cookie: auth },
    params: params
  };

  (0, _axios2.default)(config).then(function (response) {
    return res.send(response.data);
  }).catch(function (response) {
    return res.send(response);
  });
}