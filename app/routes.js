import {
  authController,
  findController,
  shapesController
} from './controllers'

export default app => {
  app.route('/auth').post(authController)
  app.route('/find').get(findController)
  app.route('/shapes/:id').post(shapesController)
}
