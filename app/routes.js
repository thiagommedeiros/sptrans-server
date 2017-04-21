import {
  authController,
  findController
} from './controllers'

export default function routes (app) {
  app
    .route('/auth').post(authController)
    .route('/find').get(findController)
}
