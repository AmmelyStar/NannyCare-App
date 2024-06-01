import { fetchDataFromDatabase } from './api'; // Укажите правильный путь к вашему файлу firebaseUtils.js

fetchDataFromDatabase()
  .then(dataSnapshot => {

    console.log('Received data from database:', dataSnapshot);
  })
  .catch(error => {

    console.error('Error fetching data from database:', error);
  });