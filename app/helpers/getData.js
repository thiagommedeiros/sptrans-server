import fs from 'fs'

const defaultPath = 'app/data/'

export default function (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${defaultPath}${file}.json`, 'utf-8', (err, data) => {
      if (err) reject(err)
      const obj = JSON.parse(data)
      resolve(obj)
    })
  })
}
