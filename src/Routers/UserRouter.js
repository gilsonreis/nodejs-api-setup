import { Router } from 'express'

// All routes below this line, must be authenticated
// routes.use(AuthMiddleare)
import UserController from '@controllers/UserController'
import InsertValidator from '@validators/Users/InserValidator'

const UserRouter = new Router()

UserRouter.get('/users', UserController.index)
UserRouter.post('/users', InsertValidator, UserController.store)

export default UserRouter
