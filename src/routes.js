import { Router } from 'express'

import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/user', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddleware)

routes.put('/user', UserController.update)

export default routes
