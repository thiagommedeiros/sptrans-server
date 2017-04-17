var axios = require('axios')

const endpoint = 'http://api.olhovivo.sptrans.com.br/v0'

module.exports = function(app) {
  app.route('/sptrans').get((req, res) => {
    var auth = req.headers.cookie;
    var params = req.query;
    var route = params.route;
    var url = endpoint + route;
    delete params['route'];

    var config = {
      method: 'get',
      url: url,
      headers: {
        Cookie: auth
      },
      params: params
    };

    axios(config)
      .then(response => res.send(response.data))
      .catch(response => res.send(response));
  });

  app.route('/sptrans/auth').post((req, res) => {
    var params = req.query;
    var url = endpoint + '/login/autenticar';

    var config = {
      method: 'post',
      url: url,
      params: params
    };

    axios(config)
      .then(response => res.send(response))
      .catch(response => res.send(response));
  });
};
