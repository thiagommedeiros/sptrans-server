import { getData } from '../helpers'

export default function (req, res) {
  getData('trips').then(trips => {
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
  }).catch(err => {
    res.send(err)
  })
}
