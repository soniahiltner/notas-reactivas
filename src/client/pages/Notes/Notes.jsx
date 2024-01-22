import { useEffect } from 'react'
import NotesList from '../../components/NotesList/NotesList'
import { useNotes } from '../../context/NotesContext'
import styles from './Notes.module.css'

const Notes = () => {

  const { notes, getNotes } = useNotes()

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <NotesList notes={ notes} />
  )
}
export default Notes