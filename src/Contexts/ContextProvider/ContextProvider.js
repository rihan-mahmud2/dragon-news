import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(app);
const auth = getAuth();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const authWhitFacebook = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.emailVerified === null || currentUser?.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setLoading,
    authWhitFacebook,
    logOut,
    signWithEmail,
    signIn,
    updateUser,
    verifyEmail,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
