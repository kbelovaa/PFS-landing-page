import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContext from '../../utils/themeContext';
import Landing from '../Landing/Landing';
import './App.scss';

const App = () => {
  const [theme, setTheme] = useState();

  const getTheme = () => {
    let theme = localStorage.getItem('theme');

    if (!theme) {
      localStorage.setItem('theme', 'dark');
      theme = 'dark';
    }

    return theme;
  };

  useEffect(() => {
    const theme = getTheme();
    setTheme(theme);
    document.documentElement.dataset.theme = theme;
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Error component */}
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
