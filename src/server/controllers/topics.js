import TopicsModel from "../models/topics.js"

class TopicController {
  // Get all topics
  static async getAll(req, res) {
    const userId = req.user.id
    const topics = await TopicsModel.getAll(userId)

    res.status(200).json(topics)
  }

  //Get topic by id
  static async getByID(req, res) {
    const { id } = req.params
    const userId = req.user.id
    const topic = await TopicsModel.getById(id)
    const topicName = topic?.name
    const notes = await NotesModel.getAll(id, userId)
    
    res.status(200).json(notes)
  }

  // Create a topic
  static async create(req, res) {
    const { name } = req.body
    const userId = req.user.id
    const topic = await TopicsModel.create(name, userId)

    res.status(200).json(topic)
  }

  //Delete a topic
  static async delete(req, res) {
    const id = req.params.id
    await TopicsModel.delete(id)
    res.status(200).json({ message: 'Topic deleted' })
  }

  //Update a topic
  static async update(req, res) {
    const id = req.params.id
    const name = req.body.name
    const updatedTopic = await TopicsModel.update(id, name)
    res.status(200).json(updatedTopic)
  }
}

export default TopicController