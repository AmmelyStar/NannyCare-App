import { initializeApp } from 'firebase/app';


import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Змінено імпорт createRoot
import React from 'react';
import App from './App';

const firebaseConfig = {
   apiKey: "your-api-key",
   authDomain: "your-auth-domain",
   databaseURL: "your-database-url",
   projectId: "your-project-id",
   storageBucket: "your-storage-bucket",
   messagingSenderId: "your-messaging-sender-id",
   appId: "your-app-id",
   measurementId: "your-measurement-id"
};

initializeApp(firebaseConfig);

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);