import TodosModel from "../models/todos.js"

class TodosController {
  static async getAll(req, res) {
    const userId = req.user.id
    const todos = await TodosModel.getAll(userId)
    res.status(200).json(todos)
  }

  static async getById(req, res) {
    const { id } = req.params
    const todo = await TodosModel.getById({ id })
    res.status(200).json(todo)
  }

  static async create(req, res) {
    const { content } = req.body
    const userId = req.user.id
    const todo = await TodosModel.create(content, userId)
    res.status(200).json(todo)
  }

  static async delete(req, res) {
    const { id } = req.params
    await TodosModel.delete(id)
    res.status(200).json({ message: 'Todo deleted' })
  }

  static async updateContent(req, res) {
    const { id } = req.params
    const { content } = req.body
    const updatedTodo = await TodosModel.updateContent(id, content)
    res.status(200).json(updatedTodo)
  }

  static async updateDone(req, res) {
    const { id } = req.params
    const updatedTodo = await TodosModel.updateDone(id)
    res.status(200).json(updatedTodo)
  }

  static async updateImportant(req, res) {
    const { id } = req.params
    const updatedTodo = await TodosModel.updateImportant(id)
    res.status(200).json(updatedTodo)
  }
}

export default TodosController