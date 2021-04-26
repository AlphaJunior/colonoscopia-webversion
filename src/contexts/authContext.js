import React, { createContext,useContext,useState,useEffect} from 'react';
import Firebase from '../services/firebase/firebase'

const AuthContext = createContext()

export const useAuth = () =>{
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const handleSignup = (email,password ) => {
    Firebase.signin(email,password )
  }
  
  const handleLogin = (email,password ) => {
    Firebase.login(email, password)
  }

  const handleLogout = () => {
    Firebase.logout()
  }

  useEffect(() => {
    const unsubscribe = Firebase.auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    handleSignup,
    handleLogin,
    handleLogout,
  }



  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;