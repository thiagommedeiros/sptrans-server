import { csvToJson } from '../helpers'

const file = './src/vendor/trips.txt'

function buildResponse (req, stops) {
  const id = req.params.id
  if (id) {
    return stops.filter(item => item.trip_id === id)
  }
  return stops
}

export default (req, res) =>
  csvToJson(file)
    .then(trips => res.send(buildResponse(req, trips)))
    .catch(err => res.send(err))
