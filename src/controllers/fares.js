import { csvToJson } from '../helpers'

const file = './src/vendor/fares_attributes.txt'

export default (req, res) =>
  csvToJson(file)
    .then(fares => res.send(fares))
    .catch(err => res.send(err))
