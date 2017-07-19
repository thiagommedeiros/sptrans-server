import test from 'ava'
import axios from 'axios'

const port = process.env.PORT || 8888
const token = '2d5a4ee1443cb4047633305bf371c72213f6c3aefc9fe3362e42bccb3c01ebf4'

test(`should return an object with first mainTerminal equal to STA. MÔNICA`, async (t) => {
  const authResponse = await axios({
    method: 'post',
    url: `http://localhost:${port}/auth/`,
    params: { token }
  })
  const findResponse = await axios({
    method: 'get',
    url: `http://localhost:${port}/find/`,
    params: {
      auth: authResponse.data.auth,
      //'type:lines' em EN pq a API publica do bus-promise é EN
      type: 'lines',
      route: '/linha/buscar',
      //o bus-promise manda esse parametro em PT, está certo, tem que enviar para a API da SPTrans assim
      termosBusca: 'Sta. Mônica'
    }
  })
  t.is(findResponse.data[0].secondaryTerminal, 'STA. MÔNICA')
})
