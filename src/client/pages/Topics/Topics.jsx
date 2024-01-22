import { useEffect } from 'react'
import { useNotes } from '../../context/NotesContext'
import styles from './Topics.module.css'
import { Link } from 'react-router-dom'

const Topics = () => {
  const { topics, getTopics } = useNotes()

  useEffect(() => {
    getTopics()
  }, [])

  return (
    <div>
      <div className={styles.topics}>
        {topics.map((topic) => (
          <Link
            to={`/topics/${topic._id}`}
            key={topic._id}
            className={styles.topicLink}
          >
            <div className={styles.topic}>
              <p>{topic.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Topics
