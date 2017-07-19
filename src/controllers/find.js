import axios from 'axios'
import {
  linesResponse,
  shapesResponse,
  stopsResponse,
  corridorsResponse,
  vehiclesPositionResponse,
  arrivalForecastResponse,
  lineForecastResponse,
  stopForecastResponse
} from '../helpers'

const endpoint = 'http://api.olhovivo.sptrans.com.br/v2.1'

function handleResponse (res, options) {
  if (options.terms === '*') return res.data

  const data = res.data
  const type = options.type

  return type === 'lines' ? linesResponse(data) :
  type === 'stops' ? stopsResponse(data) :
  type === 'stopsByCorridor' ? stopsResponse(data) :
  type === 'stopsByLine' ? stopsResponse(data) :
  type === 'corridors' ? corridorsResponse(data) :
  type === 'vehiclesPosition' ? vehiclesPositionResponse(data) :
  type === 'arrivalForecast' ? arrivalForecastResponse(data) :
  type === 'lineForecast' ? lineForecastResponse(data) :
  type === 'stopForecast' ? stopForecastResponse(data) : null
}

export default function find (req, res) {
  const params = req.query
  const auth = params.auth
  const route = params.route
  const url = endpoint + route
  delete params.route

  const config = {
    method: 'get',
    url,
    headers: { Cookie: auth },
    params
  }

  axios(config)
  .then(response => handleResponse(response, params))
  .then(response => res.send(response))
  .catch(response => res.send(response))
}
