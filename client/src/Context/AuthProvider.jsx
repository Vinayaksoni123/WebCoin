import React, { createContext, useContext, useState } from "react";
import cookies from "js-cookie";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initialuserstate = cookies.get("token") || localStorage.getItem("data");
  //parse the user data and storing in state
  const [authuser, setauthuser] = useState(
    initialuserstate ? JSON.parse(initialuserstate) : undefined
  );
  return (
    <AuthContext.Provider value={[authuser, setauthuser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
