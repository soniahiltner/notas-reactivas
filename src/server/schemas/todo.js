import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean,
    default: false
  },
  important: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo