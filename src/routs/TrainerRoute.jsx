import React, { useContext } from 'react'
import useRole from '../hooks/useRole'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProviders/AuthContextProvider';

function TrainerRoute({children}) {
  const location =useLocation();
    const{user,loading}=useContext(AuthContext)
    const[role,isLoading]=useRole();
    
    if(isLoading) return <p>Loading....</p>
    if(loading) return <p>Loading....</p>
    if(role==="trainer") return children
  return (
    <Navigate to="/" state={location?.pathname} replace></Navigate>
  )
}

export default TrainerRoute