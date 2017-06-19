import test from 'ava'
import axios from 'axios'

const stopId = '301729'
const port = process.env.PORT || 8888

test(`with a stopId param should return an object`, async (t) => {
  const url = `http://localhost:${port}/stop-times/${stopId}`
  const response = await axios({ method: 'get', url })
  t.is(response.data[0].stop_id, stopId)
})

test(`without a stopId param should return an object with all stop times`, async (t) => {
  const url = `http://localhost:${port}/stop-times/`
  const response = await axios({ method: 'get', url })
  t.true(response.data.length > 10)
})
