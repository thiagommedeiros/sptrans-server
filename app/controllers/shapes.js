import { getData } from '../helpers'

export default async function (req, res) {
  const id = req.params.id
  const shapes = await getData('shapes')
  const filtered = shapes.filter(item => item.shape_id === id)
  res.send(filtered)
}
