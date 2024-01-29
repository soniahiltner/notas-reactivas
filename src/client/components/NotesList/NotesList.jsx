import styles from './NotesList.module.css'
import Note from '../Note/Note'

const NotesList = ({ notes }) => {
  return (
    <div className={styles.notes}>
      {notes.length === 0 && (
        <div className={styles.empty}>
          <h3>Nothing here</h3>
        </div>
      )}
      {notes.length > 0 &&  notes.map((note) => (
        <Note
          key={note._id}
          note={note}
        />
      ))}
    </div>
  )
}

export default NotesList
