import { useTodos } from '../../context/TodosContext'
import styles from './ImportantButton.module.css'

const ImportantButton = ({ todo }) => {

  const { updateImportant } = useTodos()
  return (
    <button
      className={styles.optionsBtn}
      onClick={() => updateImportant(todo._id)}
    >
      {todo.important ? (
        <span className={styles.important}>Important&#10071;</span>
      ) : (
        'not in a hurry'
      )}
    </button>
  )
}

export default ImportantButton