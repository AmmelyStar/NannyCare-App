import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider'; 
import RowRadioButtonsGroup from '../switchBtn/switchBtn'; // Импортируем компонент с радио-кнопками
import redTheme from '../../../dataTheme/theme-red.json';
const SwitchTheme = () => {
  const { theme, changeTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState(redTheme);

  useEffect(() => {
    setActiveTheme(theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    setActiveTheme(newTheme);
  };

  return (
    <div style={{ backgroundColor: theme.mainColor, color: theme.accentColor }}>
      <RowRadioButtonsGroup handleThemeChange={handleThemeChange} />
    </div>
  );
};

export default SwitchTheme;