import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <h1>Loading...</h1>
  // Check if the user is authenticated
  if (!loading && !isAuthenticated) {
    // If not authenticated, redirect to the login page
    return (
      <Navigate
        to='/login'
        replace
      />
    )
  }

  // If authenticated, render the child routes
  return <Outlet />
}

export default ProtectedRoute
