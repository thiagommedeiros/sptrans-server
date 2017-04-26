import { getData } from '../helpers'

export default async function (req, res) {
  const shapes = await getData('shapes')
  const id = req.params.id
  const response = shapes.filter(item => item.shape_id === id)
  res.send(response)
}
