import { useNotes } from '../../context/NotesContext'
import Form from '../Form/Form'

const EditNote = ({ setEditText, note }) => {
  const { editNote } = useNotes()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = {
      text: e.target.text.value
    }
    editNote(note._id, newNote)
    setEditText(false)
  }

  return (
    <Form
      setModal= {setEditText}
      nameAttr={`text`}
      handleSubmit={handleSubmit}
      defaultValue={note.text}
    />
  )
}

export default EditNote