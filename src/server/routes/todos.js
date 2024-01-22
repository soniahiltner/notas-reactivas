import express from 'express'
import TodosController from '../controllers/todos.js'
import { authMiddleware } from '../middleware/authmiddleware.js'

const todosRouter = express.Router()

todosRouter.get('/', authMiddleware, TodosController.getAll)
todosRouter.post('/', authMiddleware, TodosController.create)
todosRouter.delete('/:id', authMiddleware, TodosController.delete)
todosRouter.put('/:id', authMiddleware, TodosController.updateContent)
todosRouter.patch('/:id/done', authMiddleware, TodosController.updateDone)
todosRouter.patch('/:id/important', authMiddleware, TodosController.updateImportant)

export default todosRouter