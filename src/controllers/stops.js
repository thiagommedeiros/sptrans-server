import { getResource } from '../helpers'

export default function (req, res) {
  getResource('stops').then(stops => {
    const stopId = req.params.stopId
    let response = stops
    if (stopId) {
      response = stops.filter(item => item.stop_id.includes(stopId))
    }
    res.send(response)
  }).catch(err => {
    res.send(err)
  })
}
