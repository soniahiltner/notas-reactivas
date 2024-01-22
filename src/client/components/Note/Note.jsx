import { useState } from 'react'
import styles from './Note.module.css'
import EditNote from '../EditNote/EditNote'
import EditNoteTopic from '../EditNoteTopic/EditNoteTopic'
import { useNotes } from '../../context/NotesContext'

const Note = ({ note }) => { 

  const formatTime = new Date(note.createdAt).toDateString()
  const [editText, setEditText] = useState(false)
  const [editTopic, setEditTopic] = useState(false)

  const { deleteNote } = useNotes()

  return (
    <article className={styles.note}>
      <div className={styles.noteTopic}>
        {note.topic?.name && (
          <span className={styles.topicTag}>{note.topic.name}</span>
        )}
      </div>
      <p>{note.text}</p>
      <div className={styles.noteFooter}>
        <div className={styles.btnContainer}>
          <button
            className={`${styles.btn} ${styles.btnSubmit}`}
            onClick={() => setEditTopic(true)}
          >
            <i className='fa fa-folder-open'></i>
          </button>
          <button
            className={`${styles.btn} ${styles.btnEdit}`}
            onClick={() => setEditText(true)}
          >
            <i className='fa fa-pen'></i>
          </button>
          <button
            className={`${styles.btn} ${styles.btnDelete}`}
            onClick={() => deleteNote(note._id)}
          >
            <i className='fa fa-trash'></i>
          </button>
        </div>
        <small className={styles.date}>{formatTime} </small>
      </div>
      {editText && (
        <EditNote setEditText={setEditText} note={note} />
      )}
      {editTopic && (
        <EditNoteTopic setEditTopic={setEditTopic} note={note} />
      )}
    </article>
  )
}

export default Note