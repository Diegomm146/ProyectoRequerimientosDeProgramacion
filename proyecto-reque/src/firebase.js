// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Pzdi0_Ti2divQkDWTIYgrUZyL1ssXWw",
  authDomain: "proyectoreque-449e0.firebaseapp.com",
  projectId: "proyectoreque-449e0",
  storageBucket: "proyectoreque-449e0.appspot.com",
  messagingSenderId: "679796578745",
  appId: "1:679796578745:web:1c2b20ec37d77ab34f3e68",
  measurementId: "G-THQP7GJQX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);