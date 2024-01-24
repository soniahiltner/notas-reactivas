import { useTodos } from '../../context/TodosContext'
import styles from './NewTodo.module.css'

const NewTodo = () => {

  const { addTodo } = useTodos()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      content: e.target.content.value
    }
    addTodo(newTodo)
    e.target.reset()
  }
  return (
    <form className={styles.newTodo} onSubmit={handleSubmit}>
      <div className={styles.inputTodo}>
        <label htmlFor='content'>New Todo</label>
        <input
          id='content'
          type='text'
          name='content'
          required
        />
      </div>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.submitBtn} ${styles.button}`}>
          Create
        </button>
      </div>
    </form>
  )
}

export default NewTodo