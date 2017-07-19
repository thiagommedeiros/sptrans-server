'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = auth;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'http://api.olhovivo.sptrans.com.br/v2.1/login/autenticar';

function auth(req, res) {
  var params = req.query;

  var config = {
    method: 'post',
    url: url,
    params: params
  };

  return (0, _axios2.default)(config).then(function (response) {
    res.send({
      data: response.data,
      status: response.status,
      auth: response.headers['set-cookie']
    });
  }).catch(function (err) {
    res.send({
      error: true,
      message: 'O servidor da SPTrans respondeu com erro: ' + err.response.status + ' - ' + err.response.statusText
    });
  });
}