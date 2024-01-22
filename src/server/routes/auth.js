import express from 'express'
import { AuthController } from '../controllers/auth.js'

const userRouter = express.Router()

userRouter.post('/login', AuthController.login)
userRouter.post('/register', AuthController.register)
userRouter.post('/logout', AuthController.logout)
userRouter.get('/verify', AuthController.verifyToken)

export default userRouter
