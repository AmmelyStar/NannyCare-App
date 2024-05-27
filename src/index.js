import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Змінено імпорт createRoot
import React from 'react';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';


createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);