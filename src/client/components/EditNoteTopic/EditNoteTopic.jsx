import { useEffect } from 'react'
import styles from './EditNoteTopic.module.css'
import { useNotes } from '../../context/NotesContext'
import { useNavigate } from 'react-router-dom'

const EditNoteTopic = ({ setEditTopic, note }) => {

  const { topics, getTopics, editNote } = useNotes()
  const navigate = useNavigate()
  useEffect(() => {
    getTopics()
  }, [])

  const handleSubmit = (e) => {
    
    const newNote = {
      topic: e.target.topic.value
    }
    
    editNote(note._id, newNote)
    setEditTopic(false)
    e.preventDefault()
  }
  
  return (
    <div
      className={styles.modal}
      onClick={() => setEditTopic(false)}
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <fieldset className={styles.input}>
          <legend>Add to:</legend>
          {topics.map((topic) => (
            <label
              key={topic._id}
              className={styles.radioTopic}
              htmlFor='topic'
            >
              <input
                type='radio'
                name='topic'
                value={topic._id}
                defaultChecked={note.topic?.name === topic.name ? 'checked' : ''}
              />
              {topic.name}
            </label>
          ))}
        </fieldset>
        <div className={styles.btnContainer}>
          <button
            className={`${styles.button} ${styles.cancelBtn}`}
            onClick={() => setEditTopic(false)}
          >
            Cancel
          </button>
          <button
            type='submit'
            className={`${styles.button} ${styles.submitBtn}`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditNoteTopic
