import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOSLXYsnZ04z46wgi_atjJW9P3Bhiyx-Y",
  authDomain: "nannycare-app.firebaseapp.com",
  databaseURL: "https://nannycare-app-default-rtdb.firebaseio.com",
  projectId: "nannycare-app",
  storageBucket: "nannycare-app.appspot.com",
  messagingSenderId: "501562909869",
  appId: "1:501562909869:web:80e0aac52c1d6f8c2b9224",
  measurementId: "G-WKMBC8RS9V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };