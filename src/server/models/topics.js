import Note from "../schemas/note.js"
import Topic from "../schemas/topic.js"


class TopicsModel {
  static async getAll(userId) {
    try {
      const topics = await Topic.find({ user: userId })
      return topics
    } catch (error) {
      console.log('Error trying to get topics')
    }
  }

  // Get by id
  static async getById(id) {
    try {
      const topic = await Topic.findById(id)
      return topic
    } catch (error) {
      console.log('Error trying to get topic')
    }
  }
  // Create topic
  static async create(name, userId) {
    try {
      const newTopic = new Topic({
        name: name,
        user: userId
      })
      await newTopic.save()
      return newTopic
    } catch (error) {
      console.log(`Error creating the topic`, error)
    }
  }

  //Delete Topic
  static async delete(id) {
    try {
      // First delete the notes
      const notes = await Note.deleteMany({ topic: id })
      // Delete topic
      await Topic.findByIdAndDelete(id)

    } catch (error) {
      console.log('Error trying to delete topic')
    }
  }

  // Update topic
  static async update(id, name) {
    try {
      const topic = await Topic.findOneAndUpdate({ _id: id }, { name: name }, { new: true })
      return topic
    } catch (error) {
      console.log('Error trying to update topic')
    }
  }
}

export default TopicsModel