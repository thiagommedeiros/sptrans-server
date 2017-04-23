import {
  authController,
  findController,
  shapesController,
  tripsController
} from './controllers'

export default app => {
  app.route('/auth').post(authController)
  app.route('/find').get(findController)
  app.route('/shapes/:id').post(shapesController)
  app.route('/trips/:trip_id/:route_id').post(tripsController)
}
