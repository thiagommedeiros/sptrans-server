import { getData } from '../helpers'

export default async function (req, res) {
  const trips = await getData('trips')
  const tripId = req.params.tripId
  let response = trips
  if (tripId) {
    response = trips.filter(item => {
      if (item.trip_id.includes(tripId)) {
        return item
      }
      return false
    })
  }
  res.send(response)
}
