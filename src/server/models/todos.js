import Todo from "../schemas/todo.js"

class TodosModel {
  //Get all todos
  static async getAll(userId) {
    try {
      const todos = await Todo.find({ user: userId }).sort({ createdAt: -1 }).exec()
      return todos
    } catch (error) {
      console.log(`Error trying to get the todos`, error)
    }
  }

  // Get one todo
  static async getById({ id }) {
    try {
      const todo = await Todo.findById(id).exec()
      return todo
    } catch (error) {
      console.log(`Error trying to get the todo`, error)
    }
  }

  //Create a todo
  static async create(content, userId) {
    try {
      const newTodo = new Todo({
        content,
        user: userId
      })
      const todo = await newTodo.save()
      return todo
    } catch (error) {
      console.log(`Error trying to create a new todo`, error)
    }
  }

  // Delete a todo
  static async delete(id) {
    try {
      await Todo.findByIdAndDelete(id)
    } catch (error) {
      console.log(`Error deleting the todo`, error)
    }
  }
  //Update the content
  static async updateContent(_id, content) {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate({ _id }, { content }, { new: true })
      console.log('updatedTodo', updatedTodo)
      return updatedTodo
    } catch (error) {
      console.log('Error updating the todo', error)
    }
  }

  //Update done
  static async updateDone(id) {
    try {
      const todo = await Todo.findById(id)
      todo.done = !todo.done
      await todo.save()
      console.log('updatedTodo', todo)
      return todo
    } catch (error) {
      console.log('Error updating the todo', error)
    }

  }

  //Update important
  static async updateImportant(id) {
    try {
      const todo = await Todo.findById(id)
      todo.important = !todo.important
      await todo.save()
      console.log('updatedTodo', todo)
      return todo
    } catch (error) {
      console.log('Error updating the todo', error)
    }

  }

}

export default TodosModel

