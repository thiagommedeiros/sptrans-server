import {
  authController,
  findController,
  shapesController,
  tripsController,
  stopsController,
  stopTimesController,
  faresController
} from '../controllers'

export default app => {
  app.route('/auth').post(authController)
  app.route('/find').get(findController)
  app.route('/shapes/:id*?').get(shapesController)
  app.route('/trips/:id*?').get(tripsController)
  app.route('/stops/:id*?').get(stopsController)
  app.route('/stop-times/:id*?').get(stopTimesController)
  app.route('/fares').get(faresController)
}
