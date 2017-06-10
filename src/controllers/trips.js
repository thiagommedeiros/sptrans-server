import { getResource } from '../helpers'

export default function (req, res) {
  getResource('trips').then(trips => {
    const id = req.params.tripId
    let response = trips
    if (id) {
      response = trips.filter(item => item.trip_id.includes(id))
    }
    res.send(response)
  }).catch(err => {
    res.send(err)
  })
}
