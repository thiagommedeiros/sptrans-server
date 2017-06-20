import { csvToJson } from '../helpers'

const file = './src/vendor/shapes.txt'

function buildResponse (req, shapes) {
  const id = req.params.id
  if (id) {
    return shapes.filter(item => item.shape_id === id)
  }
  return shapes
}

export default (req, res) =>
  csvToJson(file)
    .then(shapes => res.send(buildResponse(req, shapes)))
    .catch(err => res.send(err))
