import React, { useContext } from 'react'
import { AuthContext } from '../ContextProviders/AuthContextProvider'
import useRole from '../hooks/useRole';
import { Navigate, useLocation } from 'react-router-dom';

function AdminRoute({children}) {
    const{user}=useContext(AuthContext);
    const[role,isLoading]=useRole();
    const location=useLocation();
    if (isLoading) return <p>Loading</p>
    if (role === 'admin') return children
  return (
    <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
  )
}

export default AdminRoute