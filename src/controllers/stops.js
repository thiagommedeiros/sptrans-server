import { csvToJson } from '../helpers'

const file = './src/vendor/stops.txt'

function buildResponse (req, stops) {
  const id = req.params.id
  if (id) {
    return stops.filter(item => item.stop_id === id)
  }
  return stops
}

export default (req, res) =>
  csvToJson(file)
    .then(stops => res.send(buildResponse(req, stops)))
    .catch(err => res.send(err))
