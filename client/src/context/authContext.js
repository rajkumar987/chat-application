"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({ user: null, setUser: function () {} });

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [newProfile, setNewProfile] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, newProfile, setNewProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
