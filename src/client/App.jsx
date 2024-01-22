import { useState } from 'react'
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Notes from './pages/Notes/Notes'
import Header from './components/Header/Header'
import Todos from './pages/Todos/Todos'
import Topics from './pages/Topics/Topics'
import Topic from './pages/Topic/Topic'
import { useAuth } from './context/AuthContext'

function App() {
  //const [user, setUser] = useState('')
  const { user } = useAuth()

  // Protected routes
  const ProtectedRoute = ({ user, redirectPath = '/login', children }) => {
    if (!user) {
      return (
        <Navigate
          to={redirectPath}
          replace
        />
      )
    }
    return children ? children : <Outlet />
  }

  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route element={<ProtectedRoute user={user} />}>
            <Route
              path='/notes'
              element={<Notes />}
            />
            <Route
              path='/topics'
              element={<Topics />}
            />
            <Route
              path='/topics/:id'
              element={<Topic />}
            />
            <Route
              path='/todos'
              element={<Todos />}
            />
          </Route>
          <Route
            path='*'
            element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
