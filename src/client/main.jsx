import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { NotesProvider } from './context/NotesContext'
import { TodosProvider } from './context/TodosContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NotesProvider>
        <TodosProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TodosProvider>
      </NotesProvider>
    </AuthProvider>
  </React.StrictMode>
)
