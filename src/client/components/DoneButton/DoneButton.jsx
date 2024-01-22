import { useTodos } from '../../context/TodosContext'
import styles from './DoneButton.module.css'

const DoneButton = ({ todo }) => {

  const { updateDone } = useTodos()
  return (
    <button
      className={styles.optionsBtn}
      onClick={() => updateDone(todo._id)}
    >
      {todo.done ? (
        <span className={styles.done}>Done&#10004;</span>
      ) : (
        'pending'
      )}
    </button>
  )
}
export default DoneButton
