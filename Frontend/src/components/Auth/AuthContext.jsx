import { createContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const cookies = new Cookies();
  
  const saveTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("authToken", jwtToken);
  };

  const getTokenFromLocalStorage = () => {
    return localStorage.getItem("authToken");
  };

  useEffect(() => {
    const storedToken = getTokenFromLocalStorage();
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  const login = (jwtToken) => {
    console.log("setting token");
    setIsLoggedIn(true);
    setToken(jwtToken);
    saveTokenToLocalStorage(jwtToken);
  };

  const logout = () => {
    console.log("hi");
    setIsLoggedIn(false);
    setToken(null);
    cookies.remove("TOKEN");
    localStorage.removeItem("authToken");
  };

  const value = {
    isLoggedIn,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };