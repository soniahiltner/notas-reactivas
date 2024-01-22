import mongoose from "mongoose"

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    default: null
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Note = mongoose.model('Note', noteSchema)

export default Note
