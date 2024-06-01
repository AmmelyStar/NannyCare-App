import {
  getDatabase,
  ref,
  query,
  limitToFirst,
  startAt,
  onValue,
} from 'firebase/database';

export const fetchDataFromPagination = (pageNumber, pageSize) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const dataRef = ref(db); 
    console.log('23323232', db);

    const pageQuery = query(
      dataRef,
      limitToFirst(pageSize),
      startAt(pageNumber * pageSize)
    ); 

    onValue(
      pageQuery,
      snapshot => {
        const dataSnapshot = snapshot.val();
        resolve(dataSnapshot);
      },
      error => {
        reject(error);
      }
    );
  });
};
fetchDataFromPagination();