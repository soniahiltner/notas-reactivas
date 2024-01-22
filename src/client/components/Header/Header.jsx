import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'
import NewTodo from '../NewTodo/NewTodo'
import NewNote from '../NewNote/NewNote'
import NewTopic from '../NewTopic/NewTopic'

const Header = () => {

  // state for location
  const [todos, setTodos] = useState(false)
  // state for modal
  const [modalNote, setModalNote] = useState(false)
  const [modalTopic, setModalTopic] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/')
  }
  const location = window.location.pathname
  
  useEffect(() => {
    if (location === '/todos') {
      setTodos(true)
    } else {
      setTodos(false)
    }
  })
  const styleNavLink = ({ isActive }) => {
    return isActive ? styles.active : styles.menuItem 
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h1>QUICK NOTES</h1>
        <div className={styles.welcome}>
          <h3>{`Welcome ${user ? user.username : ''}`}</h3>
        </div>
        <div className={styles.logBtns}>
          {user && (
            <Link
              to={todos ? `/notes` : `/todos`}
              className={`${styles.loginBtn} ${styles.todoBtn}`}>
              <span>{todos ? 'NOTES' : 'TODOs'}</span>
            </Link>
          )}
          
          {user ? (
            <button
              className={`${styles.logoutBtn} ${styles.loginBtn}}`}
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          ) : (
            <Link
              to={`/login`}
              className={styles.loginBtn}
            >
              <span>SIGN IN</span>
            </Link>
          )}
        </div>
      </div>
      {user && !todos && (
        <nav>
          <ul>
            <li>
              <NavLink
                to={`/notes`}
                className={styleNavLink}
              >
                notes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/topics`}
                className={styleNavLink}
              >
                topics
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      {/* New Container */}
      {user && !todos && (
        <div className={styles.newContainer}>
          <button
            className={styles.newBtn}
            onClick={() => setModalNote(true)}
          >
            NEW NOTE
          </button>
          <button
            className={styles.newBtn}
            onClick={() => setModalTopic(true)}
          >
            NEW TOPIC
          </button>
        </div>
      )}
      {/* New todo form */}
      {user && todos && (
        <>
          <NewTodo />
          <h2 className={styles.todosTitle}>TODOs</h2>
        </>
      )}
      {/* Modal new note */}
      {modalNote && (
        <NewNote setModalNote={setModalNote} />
      )}
      {/* Modal new topic */}
      {modalTopic && (
        <NewTopic setModalTopic={setModalTopic} />
      )}
    </div>
  )
}

export default Header