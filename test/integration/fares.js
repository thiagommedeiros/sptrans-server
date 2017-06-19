import test from 'ava'
import axios from 'axios'

const port = process.env.PORT || 8888
const url = `http://localhost:${port}/fares`

test(`should return an object with fare id`, async (t) => {
  const faresResponse = await axios({ method: 'get', url })
  if ('fare_id' in faresResponse.data[0]) {
    t.pass()
  } else {
    t.fail()
  }
})
