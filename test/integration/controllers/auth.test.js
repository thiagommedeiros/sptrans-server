import test from 'ava'
import axios from 'axios'

const token = '1e7c20905fe86990c5227e7e9f00002fe908d4d4dd4d7c0091032dacd2d0e07d'

test('should return sptransRes as true to a valid token', async t =>
  axios({
    method: 'post',
    url: 'http://localhost:8888/auth',
    params: { token }
  }).then(res => {
    t.is(res.data.sptransRes, true)
  })
)

test('should return sptransRes as false to a invalid token', async t =>
  axios({
    method: 'post',
    url: 'http://localhost:8888/auth',
    params: { token: 'some-invalid-token' }
  }).then(res => {
    t.is(res.data.sptransRes, false)
  })
)
