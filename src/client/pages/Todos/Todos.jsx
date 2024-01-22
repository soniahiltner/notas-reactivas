import { useEffect } from 'react'
import Todo from '../../components/Todo/Todo'
import { useTodos } from '../../context/TodosContext'
import styles from './Todos.module.css'

const Todos = () => {

  const { todos, getTodos } = useTodos()

  // Get todos on mount
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        {todos.length === 0 && (
          <div className={styles.empty}>
            <h3>Nothing here</h3>
          </div>
        )}
        {todos.map(todo => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default Todos