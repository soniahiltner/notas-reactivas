import express from 'express'
import NoteController from '../controllers/notes.js'
import { authMiddleware } from '../middleware/authmiddleware.js'

const notesRouter = express.Router()

notesRouter.get('/',authMiddleware, NoteController.getAll)
notesRouter.post('/',authMiddleware, NoteController.create)
notesRouter.delete('/:id',authMiddleware, NoteController.delete)
notesRouter.put('/:id',authMiddleware, NoteController.update)

export default notesRouter