// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLZ5hmlB6g6s-4qCQPgR4xhW0zVbY-C3A",
  authDomain: "instagram-clone-cecbe.firebaseapp.com",
  projectId: "instagram-clone-cecbe",
  storageBucket: "instagram-clone-cecbe.appspot.com",
  messagingSenderId: "548493695231",
  appId: "1:548493695231:web:8230e47a9e369b7a6cd4ca",
  measurementId: "G-M8YF1KEDC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
