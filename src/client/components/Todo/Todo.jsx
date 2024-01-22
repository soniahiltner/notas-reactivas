import { Link } from 'react-router-dom'
import DoneButton from '../DoneButton/DoneButton'
import ImportantButton from '../ImportantButton/ImportantButton'
import styles from './Todo.module.css'
import { useState } from 'react'
import EditTodo from '../EditTodo/EditTodo'

const Todo = ({ todo }) => {

  const [editTodo, setEditTodo] = useState(false)

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todo}>
        <div className={styles.todoContent} >
          <h2>{todo.content}</h2>
        </div>
        <div className={styles.checkBtns}>
          <ImportantButton todo={todo} />
          <DoneButton todo={todo} />
        </div>
      </div>
      <div className={styles.btnContainer}>
          <button
            className={`${styles.button} ${styles.editBtn}`}
            onClick={() => setEditTodo(true)}
          >
            Edit
          </button>
          <button
            className={`${styles.button} ${styles.deleteBtn}`}
            onClick={() => console.log('delete')}
          >
            Delete
          </button>
        </div>
      {editTodo && (
        <EditTodo todo={todo} setEditTodo={setEditTodo} />
      )}
    </div>
  )
}

export default Todo