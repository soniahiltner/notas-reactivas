import { Link, useNavigate } from "react-router-dom"
import styles from './Login.module.css'
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react"
import LoginForm from "../../components/LoginForm/LoginForm"


const Login = () => {

  const { login, isAuthenticated, errors, loading } = useAuth()

  const navigate = useNavigate()
  // Check if user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/notes')
    }
  }, [isAuthenticated])

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault()
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    await login(user)
  }

  return (
    <LoginForm handleSubmit={handleLogin} type={`login`}/>
  )
}

export default Login