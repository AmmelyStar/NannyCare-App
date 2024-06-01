import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePages';
import { ThemeProvider } from './components/theme/ThemeProvider';
import './index.css';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { Nannies } from './pages/nannies/Nannies.jsx';
import { Favorites } from './pages/favorites/favorites.jsx';
import Header from './components/header/Header.jsx';


function App() {


  return (
    <ThemeProvider>
      <Header
        
      />
      <Routes>        
        <Route path="/" element={<HomePage />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;