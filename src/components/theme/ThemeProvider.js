import React, { createContext, useContext, useState } from 'react';
import redTheme from '../../../dataTheme/theme-red.json';
import blueTheme from '../../../dataTheme/theme-blue.json';
import greenTheme from '../../../dataTheme/theme-green.json';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(redTheme);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);