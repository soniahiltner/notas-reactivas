import { useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Notes from "./pages/Notes/Notes"
import Header from "./components/Header/Header"
import Todos from "./pages/Todos/Todos"
import Topics from "./pages/Topics/Topics"
import Topic from "./pages/Topic/Topic"

function App() {
  const [user, setUser] = useState('')

  return (
    <div className='app'>
      <Header user={user} />
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
          <Route
            path='/notes'
            element={<Notes />}
          />
          <Route
            path='/topics'
            element={<Topics />}
          />
          <Route path="/topics/:id" element={<Topic />} />
          <Route
            path='/todos'
            element={<Todos />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App;
