import React , { createContext, useContext, useState } from "react";

const themeContext = createContext();
const toggleThemeContext = createContext();

const useThemeContext = () => {
  return useContext(themeContext);
};

const useToggleThemeContext = () => {
  return useContext(toggleThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [darkTheme , setDarkTheme] = useState(false) ; 
  function toggleTheme () { 
      setDarkTheme(prev => !prev) ; 
  }
  return (
    <themeContext.Provider value={darkTheme}>
      <toggleThemeContext.Provider value = {toggleTheme}>{children}</toggleThemeContext.Provider>
    </themeContext.Provider>
  );
};

export { useThemeContext, useToggleThemeContext, ThemeProvider };
