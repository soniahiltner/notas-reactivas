import { useEffect } from 'react'
import { useNotes } from '../../context/NotesContext'
import styles from './NotesList.module.css'
import Note from '../Note/Note'

const NotesList = ({ notes }) => {


  return (
    <div className={styles.notes}>
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  )
}

export default NotesList
