import test from 'ava'
import axios from 'axios'

const port = process.env.PORT || 8888
const token = '2d5a4ee1443cb4047633305bf371c72213f6c3aefc9fe3362e42bccb3c01ebf4'

test(`should return an object with first DenominacaoTSTP equal to STA. MÔNICA`, async (t) => {
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
      tipo: 'linhas',
      termosBusca: 'Sta. Mônica',
      route: '/linha/buscar'
    }
  })
  t.is(findResponse.data[0].DenominacaoTSTP, 'STA. MÔNICA')
})
