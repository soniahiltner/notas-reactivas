import { createContext, useContext, useState } from "react"

// Todos context
const TodosContext = createContext()

// UseTodos hook
export const useTodos = () => {
  const context = useContext(TodosContext)
  if (!context) {
    throw new Error('useTodos must be used within a TodosProvider')
  }
  return context
}

// TodosProvider
export const TodosProvider = ({ children }) => {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  // Get all todos
  const getTodos = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/todos')
      const data = await res.json()
      setTodos(data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }
  // Add a todo
  const addTodo = async (todo) => {
    try {
      setLoading(true)
      const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setTodos([...todos, data])
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  // Update todo content
  const updateTodo = async (id, content) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(content),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setTodos(todos.map(todo => todo._id === id ? { ...todo, content: data.content } : todo))
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  // Update todo important
  const updateImportant = async (id) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/todos/${id}/important`, {
        method: 'PATCH',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setTodos(todos.map(todo => todo._id === id ? { ...todo, important: data.important } : todo))
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }
  // Update todo done
  const updateDone = async (id) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/todos/${id}/done`, {
        method: 'PATCH',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setTodos(todos.map(todo => todo._id === id ? { ...todo, done: data.done } : todo))
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/todos/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
      setTodos(todos.filter(todo => todo._id !== id))
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
   }

  
  return (
    <TodosContext.Provider
      value={{
        todos,
        getTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        updateImportant,
        updateDone
      }}>
      {children}
    </TodosContext.Provider>
  )
}