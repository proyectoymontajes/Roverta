// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ1W8Du7OuCz7lgEEKGSm1E9hSPkL2y8s",
  authDomain: "gpsdb-roverta.firebaseapp.com",
  databaseURL: "https://gpsdb-roverta-default-rtdb.firebaseio.com",
  projectId: "gpsdb-roverta",
  storageBucket: "gpsdb-roverta.appspot.com",
  messagingSenderId: "1089341028946",
  appId: "1:1089341028946:web:e1bfa3edded5db49193d8b",
  measurementId: "G-DRKPS19GY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);