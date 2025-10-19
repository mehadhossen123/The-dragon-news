// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsbOFHaH8Q1HaFlRKj4fhNA9b94Mb7gKw",
  authDomain: "dragon-news-d02b1.firebaseapp.com",
  projectId: "dragon-news-d02b1",
  storageBucket: "dragon-news-d02b1.firebasestorage.app",
  messagingSenderId: "699971713213",
  appId: "1:699971713213:web:8a8fee3eaaa734e9d61fd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
