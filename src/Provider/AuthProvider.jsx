import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [users,setUsers]=useState(null)
    
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
  useEffect(()=>{
    const unSubscriber=onAuthStateChanged(auth ,currentUser=>{
        setUsers(currentUser)
    })
    return ()=>{
        unSubscriber();
    }
  },[])
  console.log(users);
  

 const logOut=()=>{
    return signOut(auth)
 }
 const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password,)
 }


    const userInfo={
        signUp,
        setUsers,
        logOut,
        users,
        logIn,
    }





    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
        
            
};

export default AuthProvider;