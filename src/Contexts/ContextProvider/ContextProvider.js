import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext(app);
const auth = getAuth();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authWhitFacebook = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const authInfo = { user, authWhitFacebook };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
