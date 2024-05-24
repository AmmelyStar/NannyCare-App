import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePages';
import './index.css'
import { ThemeProvider } from './components/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
       <Routes>
     
      <Route path="/" element={<HomePage />} />
    </Routes>
    </ThemeProvider>
   
  );
}

export default App;