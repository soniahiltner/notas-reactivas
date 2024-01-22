
import { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import styles from './Register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'

const Register = () => {

  const { register, isAuthenticated, errors, loading } = useAuth()

  const navigate = useNavigate()
  // Check if user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/notes')
    }
  }, [isAuthenticated])

  // Handle register
  const handleRegister = async (e) => {
    e.preventDefault()
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    await register(user)
  }

  return (
    <LoginForm handleSubmit={handleRegister} type={`register`}/>
  )
}

export default Register
