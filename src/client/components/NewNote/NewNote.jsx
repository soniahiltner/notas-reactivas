
import { useNotes } from '../../context/NotesContext'
import Form from '../Form/Form'

const NewNote = ({ setModalNote }) => {

  const { addNote } = useNotes()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      text: e.target.text.value
    }
    
    setModalNote(false)
    addNote(note)
  }

  return (
    <Form setModal={setModalNote} nameAttr={`text`} handleSubmit={handleSubmit}/>
  )
}

export default NewNote
