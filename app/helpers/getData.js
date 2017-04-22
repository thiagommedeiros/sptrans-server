import fs from 'fs'
import JSONStream from 'JSONStream'

const defaultPath = 'app/data/'

export default function (file) {
  return new Promise(resolve => {
    const stream = fs.createReadStream(`${defaultPath}${file}.json`, { encoding: 'utf8' })
    const parser = JSONStream.parse()

    stream.pipe(parser)

    parser.on('data', obj => {
      resolve(obj)
    })
  })
}
