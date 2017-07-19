import axios from 'axios'

const endpoint = 'http://api.olhovivo.sptrans.com.br/v2.1'

export default function find (req, res) {
  const params = req.query
  const auth = params.auth
  const route = params.route
  const url = endpoint + route
  delete params.route

  const config = {
    method: 'get',
    url,
    headers: { Cookie: auth },
    params
  }

  axios(config)
    .then(response => res.send(response.data))
    .catch(response => res.send(response))
}
