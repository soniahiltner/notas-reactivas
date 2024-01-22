import NotesModel from "../models/notes.js"
import TopicsModel from "../models/topics.js"
import UsersModel from "../models/users.js"

class NoteController {
  static async getAll(req, res) {
    const topic = req.query.topic
    const userId = req.user.id
    const notes = await NotesModel.getAll(topic, userId)

    res.status(200).json(notes)
  }

  // Create a note
  static async create(req, res) {
    const { text } = req.body
    const userId = req.user.id
    const note = await NotesModel.create(text, userId)

    res.status(200).json(note)
  }

  // Delete a note
  static async delete(req, res) {
    const { id } = req.params
    await NotesModel.delete({ id })
    res.status(200).json({ message: 'Note deleted' })
  }

  // Update the note
  static async update(req, res) {
    const { id } = req.params
    const { topic, text } = req.body

    if (topic) {
      const updatedNote = await NotesModel.update(id, topic, 'topic')
      res.json(updatedNote)
    }
    if (text) {
      const updatedNote = await NotesModel.update(id, text, 'text')
      res.json(updatedNote)
    }
  }
}

export default NoteController