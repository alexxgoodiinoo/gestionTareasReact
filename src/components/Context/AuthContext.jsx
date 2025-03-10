import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logueado, setLogueado] = useState(() => localStorage.getItem('logueado') === 'true');

  const login = () => {
    setLogueado(true);
    localStorage.setItem('logueado', 'true');
  };

  const logout = () => {
    setLogueado(false);
    localStorage.removeItem('logueado');
  };

  return (
    <AuthContext.Provider value={{ logueado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}