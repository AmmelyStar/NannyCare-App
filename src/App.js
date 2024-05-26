import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePages';
import { ThemeProvider } from './components/theme/ThemeProvider';
import './index.css';
// import { getDatabase } from 'firebase/database';
import {Nannies} from './pages/nannies/Nannies.jsx'

function App() {
  // useEffect(() => {
  //   const db = getDatabase();
  //   console.log(db);
  // }, []); // Використано useEffect з порожнім масивом залежностей для емуляції componentDidMount

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nannies" element={<Nannies />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;