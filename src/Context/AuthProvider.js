import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.confing";

export const AuthContext = createContext();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // user register start
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user register end

  // user singin with email and password start
  const userSingIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user singin with email and password end

  // singIn withGoogle start
  const GoogleSingIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  // singIn withGoogle end

  // user logout start
  const logout = () => {
    return signOut(auth);
  };
  // user logout end

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, []);

  const authInfo = { userRegister, userSingIn, GoogleSingIn, user, logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
