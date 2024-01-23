import express from 'express'
import { AuthController } from '../controllers/auth.js'
import { validateSchema } from '../middleware/validatorMiddleware.js'
import { authSchema } from '../schemas/authSchema.js'

const userRouter = express.Router()

userRouter.post('/login', validateSchema(authSchema), AuthController.login)
userRouter.post('/register', validateSchema(authSchema), AuthController.register)
userRouter.post('/logout', AuthController.logout)
userRouter.get('/verify', AuthController.verifyToken)

export default userRouter
