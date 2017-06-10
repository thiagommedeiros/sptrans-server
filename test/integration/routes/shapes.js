import test from 'ava'
import axios from 'axios'

const shapeId = 59616
const port = process.env.PORT || 8888
const url = `http://localhost:${port}/shapes/${shapeId}`

test(`should return an object with shape id equal to ${shapeId}`, async (t) => {
  const response = await axios({ method: 'get', url })
  t.is(response.data[0].shape_id, shapeId.toString())
})
