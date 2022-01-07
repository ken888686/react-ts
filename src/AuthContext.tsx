import React, { useState, useMemo } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email:string, password:string) => {},
});

const AuthContextProvider = ({ children }: {children:{ isLoggedIn:boolean, onLogout: () => {}, onLogin: (email:string, password:string) => {} }}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = useMemo(() => ({
    children,
  }), [isLoggedIn]);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
