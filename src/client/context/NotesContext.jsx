import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext()

// UseNotes hook
export const useNotes = () => {
  const context = useContext(NotesContext)
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider')
  }
  return context
}

// NotesProvider
export const NotesProvider = ({ children }) => {
  
  const [notes, setNotes] = useState([])
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(false)

  // Get all notes
  const getNotes = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/notes')
      const data = await res.json()
      setNotes(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // Get all topics
  const getTopics = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/topics')
      const data = await res.json()
      setTopics(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }


  // Add a note
  const addNote = async (note) => {
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setNotes([data,...notes])
    } catch (error) {
      console.log(error)
    }
  }

  // Edit a note
  const editNote = async (id, note) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      
      const newNotes = notes.map((note) => {
        if (note._id === data._id) {
          return data
        }
        return note
      })
      setNotes(newNotes)
    } catch (error) {
      console.log(error)
    }
  }

  // Delete a note
  const deleteNote = async (id) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
      const newNotes = notes.filter((note) => note._id !== id)
      setNotes(newNotes)
    } catch (error) {
      console.log(error)
    }
  }

  //Add a topic
  const addTopic = async (topic) => {
    try {
      const res = await fetch('/api/topics', {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setTopics([...topics, data])
    } catch (error) {
      console.log(error)
    }
  }

  // Update a topic
  const editTopic = async (id, topic) => {
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      const newTopics = topics.map((topic) => {
        if (topic._id === data._id) {
          return data
        }
        return topic
      })
      // Update the topics state
      setTopics(newTopics)
      // Update the notes state
      const newNotes = notes.map((note) => {
        if (note.topic?._id === data._id) {
          return {
            ...note,
            topic: data
          }
        }
        return note
      })
      setNotes(newNotes)
    } catch (error) {
      console.log(error)
    }
  }

  // Delete a topic
  const deleteTopic = async (id) => {
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
      // Update the notes state
      const newNotes = notes.filter((note) => note.topic?._id !== id)
      setNotes(newNotes)
      // Update the topics state
      const newTopics = topics.filter((topic) => topic._id !== id)
      setTopics(newTopics)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <NotesContext.Provider
      value={{
        notes,
        topics,
        loading,
        getNotes,
        getTopics,
        addNote,
        editNote,
        deleteNote,
        addTopic,
        editTopic,
        deleteTopic
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}