import React, { useContext } from 'react'
import useRole from '../hooks/useRole'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProviders/AuthContextProvider';

function TrainerRoute({children}) {
    const{user}=useContext(AuthContext)
    const[role,isLoading]=useRole();
    const location =useLocation();
    if(isLoading) return <p>Loading....</p>
    if(role==="trainer") return children
  return (
    <Navigate to="/" state={{from:location}} replace></Navigate>
  )
}

export default TrainerRoute