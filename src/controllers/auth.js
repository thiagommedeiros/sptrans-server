import axios from 'axios'

const url = 'http://api.olhovivo.sptrans.com.br/v2.1/login/autenticar'

export default function auth (req, res) {
  const params = req.query

  const config = {
    method: 'post',
    url,
    params
  }

  return axios(config)
  .then(response => {
    res.send({
      data: response.data,
      status: response.status,
      auth: response.headers['set-cookie']
    })
  })
  .catch(err => {
    res.send({
      error: true,
      message: `O servidor da SPTrans respondeu com erro: ${err.response.status} - ${err.response.statusText}`
    })
  })
}
