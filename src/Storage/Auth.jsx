import api from "@utils/api.js";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [User, SetUser] = useState();
  useEffect(() => {
    api("GET", "auth/me", true).then(async (res) => {
      if (!res.ok) {
        SetUser(null);
        return;
      } else {
        const UserData = await res.json();
        console.log(UserData);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ User, SetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
