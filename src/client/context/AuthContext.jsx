import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export const AuthContext = createContext()

// UseAuth hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

//Authprovider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  // Register
  const register = async (user) => {
    try {
      setLoading(true)
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!res.ok) {
        const { message } = await res.json()
        setErrors(message)
        setLoading(false)
        return
      }
      const data = await res.json()
      setUser(data)
      setIsAuthenticated(true)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setErrors(error)
    }
  }

  // Login
  const login = async (user) => {
    try {
      setLoading(true)
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!res.ok) {
        const { message } = await res.json()
        setErrors(message)
        setUser(null)
        setIsAuthenticated(false)
        setLoading(false)
        return
      }
      const data = await res.json()
      setUser(data)
      setIsAuthenticated(true)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setErrors(error)
    }
  }

  // Logout
  const logout = async () => {
    try {
      await fetch('/api/logout')
      setUser(null)
      setIsAuthenticated(false)
      Cookies.get('token') && Cookies.remove('token')
    } catch (error) {
      console.log(error.message)
    }
  }

  // Timeout errors
  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  // Read the cookies
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get()
      // If there is no cookie
      if (!cookies.token) {
        setIsAuthenticated(false)
        setUser(null)
        setLoading(false)
        return
      }
      // If there is a cookie
      // Verify the cookie
      try {
        const res = await fetch('/api/verify', {
          credentials: 'same-origin'
        })
        // If the cookie is not valid
        if (!res.ok) {
          const { message } = await res.json()
          setErrors(message)
          setUser(null)
          setIsAuthenticated(false)
          setLoading(false)
          return
        }
        // If the cookie is valid
        const data = await res.json()
        setUser(data)
        setIsAuthenticated(true)
        setLoading(false)
      } catch (error) {
        setIsAuthenticated(false)
        setUser(null)
        setLoading(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        errors,
        loading,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
