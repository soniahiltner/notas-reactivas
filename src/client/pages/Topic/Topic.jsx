import { useNavigate, useParams } from 'react-router-dom'
import styles from './Topic.module.css'
import { useNotes } from '../../context/NotesContext'
import { useEffect, useState } from 'react'
import NotesList from '../../components/NotesList/NotesList'
import EditTopic from '../../components/EditTopic/EditTopic'

const Topic = () => {

  const [editTopic, setEditTopic] = useState(false)
  const { notes, getNotes, deleteTopic, topics } = useNotes()
  const id = useParams().id
  const navigate = useNavigate()

  useEffect(() => {
    getNotes()
  }, [])
  const topicNotes = notes.filter(note => note.topic?._id === id)
  const topic = topics.find(topic => topic._id === id)

  const handleDelete = async (id) => {
    deleteTopic(id)
    navigate('/topics')
  }

  return (
    <div className={styles.topic}>
      <h2>{topic.name}</h2>
          <div className={styles.editTopic} >
            <button
              className={`${styles.btn} ${styles.deleteBtn}`}
              onClick={() => handleDelete(id)}
            >
              <i className='fa fa-trash'></i>
            </button>
            <button
              className={`${styles.btn} ${styles.editBtn}`}
              onClick={() => setEditTopic(true)}
            >
              <i className='fa fa-pen'></i>
            </button>
          </div>
      {topicNotes.length === 0 && (
        <div className={styles.empty}>
          <h3>Nothing here</h3>
        </div>
      )}
      {topicNotes.length > 0 && (
        <>
          
          <NotesList notes={topicNotes} />
        </>
      )}
      {editTopic && (
        <EditTopic
          setEditTopic={setEditTopic}
          id={id}
          name={topic.name}
        />
      )}
    </div>
  )
}

export default Topic