import { getResource } from '../helpers'

export default function (req, res) {
  getResource('shapes').then(shapes => {
    const id = req.params.id
    let response = shapes
    if (id) {
      response = shapes.filter(item => item.shape_id === id)
    }
    res.send(response)
  }).catch(err => {
    res.send(err)
  })
}
