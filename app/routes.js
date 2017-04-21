import {
  authController,
  findController
} from './controllers'

export default app => {
  app.route('/auth').post(authController)
  app.route('/find').get(findController)
}
