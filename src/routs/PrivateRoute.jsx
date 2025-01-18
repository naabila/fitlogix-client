import React, { useContext } from 'react'

import { Navigate, useLocation } from 'react-router-dom';
import Loading from "../components/Loading"
import { AuthContext } from '../ContextProviders/AuthContextProvider';

function PrivateRoute({children}) {
    const{user,loading}=useContext(AuthContext);
    const location=useLocation();
if(loading){
    return <Loading></Loading>
}

if(user){
  return children
}

return <Navigate to="/login" state={location?.pathname}></Navigate>
  
}

export default PrivateRoute