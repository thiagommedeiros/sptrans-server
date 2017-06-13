import { getResource } from '../helpers'

export default function (req, res) {
  getResource('fares').then(fares => {
    res.send(fares)
  }).catch(err => {
    res.send(err)
  })
}
