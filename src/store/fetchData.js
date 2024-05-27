import { fetchDataFromDatabase } from './api'; // Укажите правильный путь к вашему файлу firebaseUtils.js

fetchDataFromDatabase()
  .then(dataSnapshot => {
    // Обработка успешного получения данных
    console.log('Received data from database:', dataSnapshot);
  })
  .catch(error => {
    // Обработка ошибки
    console.error('Error fetching data from database:', error);
  });