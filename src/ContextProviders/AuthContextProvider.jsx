import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init"
import { toast } from 'react-toastify';
import useAxiosPublic from '../hooks/useAxiosPublic';
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const axiosPublic=useAxiosPublic();
  const[user,setUser]=useState(null);
  const[loading,setLoading]=useState(true)
  // Signup with email
  const createUser = (email, password) => {
    setLoading(false)  
    return createUserWithEmailAndPassword(auth, email, password);
  };

//forget password
const changePassword=(email)=>{
 return sendPasswordResetEmail(auth, email)
}



  // Sign up with Google
  const googleLogin=(provider)=>{
    setLoading(true)  
    return signInWithPopup(auth,provider)
  }
  // Login with email
  const emailLogin=(email,password)=>{
    setLoading(true)  
    return signInWithEmailAndPassword(auth, email, password);
  }
  // Auth observer
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
  //get token and store
  if(currentUser){
    const userInfo={email:currentUser.email};
    axiosPublic.post("/jwt",userInfo)
    .then(res=>{
      if(res.data.token){
        localStorage.setItem("access-token",res.data.token);
        setLoading(false)
      }
    })

  }else{
    localStorage.removeItem('access-token');
    setLoading(false);
  }

    });
    return ()=>{
      return unsubscribe()
    }
  },[])

  // Logout
  const logoutUser = () => {
    return signOut(auth)
      .then(() => {
        setLoading(false)  
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  // Update profile
const manageProfile=(name,photo)=>{
  
  return updateProfile(auth.currentUser,{
    displayName:name,
    photoURL:photo
  })
  
}
  const authInfo = {
    createUser,
    googleLogin,
    emailLogin,
    user,
    setUser,
    logoutUser,
    loading,
    setLoading,
    changePassword,
    manageProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;