import { useEffect } from 'react'
import NotesList from '../../components/NotesList/NotesList'
import { useNotes } from '../../context/NotesContext'

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