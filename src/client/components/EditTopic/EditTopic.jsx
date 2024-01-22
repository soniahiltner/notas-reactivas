import { useNotes } from "../../context/NotesContext"
import Form from "../Form/Form"

const EditTopic = ({ setEditTopic, id, name }) => {

  const { editTopic } = useNotes()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTopic = {
      name: e.target.name.value
    }
    editTopic(id, newTopic)
    setEditTopic(false)
  }
  return (
    <Form
      setModal={setEditTopic}
      nameAttr={`name`}
      handleSubmit={handleSubmit}
      defaultValue={name}
    />
  )
}

export default EditTopic