import { getData } from '../helpers'

export default function (req, res) {
  getData('shapes').then(shapes => {
    const id = req.params.id
    const response = shapes.filter(item => item.shape_id === id)
    res.send(response)
  }).catch(err => {
    res.send(err)
  })
}
