import { getData } from '../helpers'

export default async function (req, res) {
  const id = req.params.id
  const trips = await getData('trips')
  const filtered = trips.filter(item => item.trip_id === id)
  res.send(filtered)
}
