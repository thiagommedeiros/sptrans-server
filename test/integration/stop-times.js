import test from 'ava'
import axios from 'axios'

const stopId = '450011578'
const port = process.env.PORT || 8888
const url = `http://localhost:${port}/stop-times/${stopId}`

test(`should return an object`, async (t) => {
  const response = await axios({ method: 'get', url })
  t.is(response.data[0].stop_id, stopId)
})
