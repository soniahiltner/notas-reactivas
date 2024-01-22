import mongoose from "mongoose"

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Topic should have a name'],
    unique: [true, 'Topic name should be unique'],
    lowercase: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})
const Topic = mongoose.model('Topic', topicSchema)

export default Topic
