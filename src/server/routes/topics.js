import express from 'express'
import TopicController from '../controllers/topics.js'
import { authMiddleware } from '../middleware/authmiddleware.js'

const topicsRouter = express.Router()

topicsRouter.get('/',authMiddleware, TopicController.getAll)
topicsRouter.get('/:id',authMiddleware, TopicController.getByID)
topicsRouter.post('/',authMiddleware, TopicController.create)
topicsRouter.delete('/:id',authMiddleware, TopicController.delete)
topicsRouter.put('/:id', authMiddleware, TopicController.update)

export default topicsRouter