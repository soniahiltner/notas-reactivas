import Note from "../schemas/note.js"

class NotesModel {
  // Get notes
  static async getAll(topic, userId) {
    try {
      if (!topic) {
        const notes = await Note.find({ user: userId }).populate('topic').sort({ createdAt: -1 }).exec()
        return notes
      } else {
        const notes = await Note.find({ topic: topic }).populate('topic').sort({ createdAt: -1 }).exec()
        return notes
      }
    } catch (error) {
      console.log(`Error trying to get the notes`, error)

    }
  }

  // Get note by id
  static async getById({ id }) {
    try {
      const note = await Note.findById(id).populate('topic').exec()

      return note
    } catch (error) {
      console.log(`Error trying to get the note`, error)
    }
  }

  // Create a note
  static async create(text, userId) {
    try {
      const newNote = new Note({
        text: text,
        user: userId
      })
      const note = await newNote.save()
      return note

    } catch (error) {
      console.log(`Error creating the note`, error)
    }
  }

  // Delete a note
  static async delete({ id }) {
    try {
      await Note.findByIdAndDelete(id)
    } catch (error) {
      console.log(`Error deleting the note`, error)
    }
  }

  // Update the note
  static async update(id, input, type) {
    if (type === 'text') {
      try {
        const note = await Note.findOneAndUpdate({ _id: id }, { text: input }, { new: true }).populate('topic').exec()
        return note

      } catch (error) {
        console.log(`Error updating the note`, error)
      }
    }
    if (type === 'topic') {
      try {
        const note = await Note.findOneAndUpdate({ _id: id }, { topic: input }, { new: true }).populate('topic').exec()
        
        return note
      } catch (error) {
        console.log(`Error updating the note`, error)
      }
    }
  }

}

export default NotesModel