import React, { useContext } from 'react'
import { AuthContext } from '../ContextProviders/AuthContextProvider'
import useRole from '../hooks/useRole';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

function AdminRoute({children}) {
  
    const{user,loading}=useContext(AuthContext);
    const[role,isLoading]=useRole();
    const location=useLocation();
    if(loading) return <Loading></Loading>
    if (isLoading) return <Loading></Loading>
    if (role === 'member') return children
  return (
    <Navigate to="/dashboard" state={ location.pathname} replace></Navigate>
  )
}

export default AdminRoute