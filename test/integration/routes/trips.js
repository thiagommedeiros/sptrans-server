import test from 'ava'
import axios from 'axios'

const tripId = '1012-10-0'
const port = process.env.PORT || 8888
const url = `http://localhost:${port}/trips/${tripId}`

test(`should return an object with trip id equal to ${tripId}`, async (t) => {
  const response = await axios({ method: 'get', url })
  t.is(response.data[0].trip_id, tripId)
})
