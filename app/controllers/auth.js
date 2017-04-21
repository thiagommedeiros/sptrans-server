import axios from 'axios'

const endpoint = 'http://api.olhovivo.sptrans.com.br/v0'

export default function auth (req, res) {
  const params = req.query
  const url = `${endpoint}/login/autenticar`

  const config = {
    method: 'post',
    url,
    params
  }

  axios(config)
    .then(response => {
      res.send({
        data: response.data,
        status: response.status,
        auth: response.headers['set-cookie']
      })
    })
    .catch(response => res.send(response))
}
