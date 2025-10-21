import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [users,setUsers]=useState(null)
    const [loading  ,setLoading ]=useState(true);
    //  console.log(users)
    
    const signUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
  useEffect(()=>{
    const unSubscriber=onAuthStateChanged(auth ,currentUser=>{
        setUsers(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscriber();
    }
  },[])
 
  

 const logOut=()=>{
    setLoading(true)
    return signOut(auth)
 }
 const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password,)
 }




 const updateUser=(userData)=>{
    return updateProfile (auth.currentUser,userData)
 }


    const userInfo={
        signUp,
        setUsers,
        logOut,
        users,
        logIn,
        loading,
        updateUser,
    }





    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
        
            
};

export default AuthProvider;