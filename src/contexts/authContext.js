import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../services/firebase/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  function handleSignup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function handleLogin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function handleLogout() {
    return auth.signOut();
  }

  useEffect(() => {
    let unsubscribe = null;
    if (loading === true) {
      unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setLoading(false);
      });
    }
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    handleSignup,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {console.log(loading)}
      {console.log(children)}
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
