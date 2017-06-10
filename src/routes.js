import {
  authController,
  findController,
  shapesController,
  tripsController
} from './controllers'

export default app => {
  app.route('/auth').post(authController)
  app.route('/find').get(findController)
  app.route('/shapes/:id*?').get(shapesController)
  app.route('/trips/:tripId*?').get(tripsController)
}
