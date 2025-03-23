// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBimQ0AUNr9Kl1lRAWvnEVhYskf5ZH-Ag4",
  authDomain: "thuecode24h-7bffd.firebaseapp.com",
  projectId: "thuecode24h-7bffd",
  storageBucket: "thuecode24h-7bffd.firebasestorage.app",
  messagingSenderId: "731835347253",
  appId: "1:731835347253:web:2619c40e65f66b64811c7c",
  measurementId: "G-C1PJQKETFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };