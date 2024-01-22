import { useTodos } from "../../context/TodosContext"
import Form from "../Form/Form"

const EditTodo = ({ todo, setEditTodo }) => {

  const { updateTodo } = useTodos()
  
  const handleSubmit = (e) => {
    const newTodo = {
      content: e.target.content.value
    }
    updateTodo(todo._id, newTodo)
    e.preventDefault()
  }
  return (
    <Form
      setModal={setEditTodo}
      nameAttr={`content`}
      handleSubmit={handleSubmit}
      defaultValue={todo.content}
    />
  )
}

export default EditTodo