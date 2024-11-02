import React, { createContext, useContext, useState } from 'react';
import Colors from '../constant/Colors';
// Create a Context for the theme
const ThemeContext = createContext();
// Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  const backgroundColor = isDarkMode ? '#1c1c1c' : Colors.Text_color;
  const NotificationsCard_bg = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? '#fff' : Colors.Text_color;
  const bg_MyOrder = isDarkMode ? Colors.Text_color : Colors.white;
  const text_MyOrder = isDarkMode ? Colors.white : Colors.Text_color;
  const Forgot_bg = isDarkMode ? 'black' : Colors.white;
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme , backgroundColor, textColor, NotificationsCard_bg, bg_MyOrder, text_MyOrder,Forgot_bg}}>
      {children}
    </ThemeContext.Provider>
  );
};
// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);