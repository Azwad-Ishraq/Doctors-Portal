import { useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword ,GoogleAuthProvider  ,signInWithPopup , updateProfile,getIdToken } from "firebase/auth";
import { useEffect } from "react";
import errorGeneretor from "./errorGeneretor";
initializeAuthentication()

const useFirebase = () => {
  const [user,setUser] = useState({})
  const [loading,setLoading] = useState(true)
  const [authError,setAuthError] = useState('')
  const [admin,setAdmin] = useState(false)
  const [token,setToken] = useState('')
  
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();
  const registerUser = (email,password,name,history) =>{
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    setAuthError('')
    const newUser = {email,displayName: name}
    setUser(newUser)

    saveUser(email,name,'POST')

    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });


    history.replace('/home')
    
    // ...
  })
  .catch((error) => {
    
    setAuthError(error.message)
    // ..
  })
  .finally(()=>setLoading(false));
  }

  const loginUser = (email,password,location,history) =>{
    setLoading(true)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
    setAuthError('')
    const destination = location.state?.from || '/home';
    history.replace(destination)
    
    // ...
  })
  .catch((error) => {
    
    setAuthError(errorGeneretor(error.message))
    
  })
  .finally(()=>setLoading(false));

  }

  const signinWithGoogle = (location,history) => {
    setLoading(true)
    signInWithPopup(auth, googleProvider)
  .then((result) => {
   
    const user = result.user;
    saveUser(user.email,user.displayName,'PUT')
    setAuthError('')
    const destination = location.state?.from || '/home';
    history.replace(destination)
    
  }).catch((error) => {
    setAuthError(error.message)
   
    
  })
  .finally(()=> setLoading(false));
  }

useEffect(()=>{
const unsubscribe =   onAuthStateChanged(auth, (user) => {
    if (user) {
    
     
      setUser(user)
      getIdToken(user)
      .then(idToken => {
        console.log(idToken)
        setToken(idToken)
      })
     
    } else {
      setUser({})
     
    }
    setLoading(false)
  });
  return () => unsubscribe
},[auth])



useEffect(()=>{
  console.log(user.email)
  fetch(`https://morning-mountain-42778.herokuapp.com/users/${user.email}`)
  .then(res=> res.json())
  .then(data => setAdmin(data.admin))
},[user.email])

  const logOut = () => {
    setLoading(true)
    signOut(auth)
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // setAuthError(error.message)
      
    })
    .finally(()=> setLoading(false));
    
  }

  const saveUser = (email,displayName,method) => {
    const user ={email,displayName};
    fetch(`https://morning-mountain-42778.herokuapp.com/users`,{
      method: method,
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()
  }


















  return {
    user,
    token,
    admin,
    loading,
    registerUser,
    logOut,
    loginUser,
    authError,
    signinWithGoogle
  }
}


export default useFirebase


