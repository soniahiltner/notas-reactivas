import { useNotes } from '../../context/NotesContext'
import Form from '../Form/Form'

const NewTopic = ({ setModalTopic }) => {

  const  { addTopic } = useNotes()

  const handleSubmit = (e) => {
    e.preventDefault()
    const topic = {
      name: e.target.name.value
    }
    addTopic(topic)
    setModalTopic(false)
  }
  return (
    <Form
      setModal={setModalTopic}
      nameAttr={`name`}
      handleSubmit={handleSubmit}
    />
  )
}
export default NewTopic