// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXT2tzlDF8Fc9qbhM8EvxJmna84EZhLCQ",
  authDomain: "emitrr-assignment-89a9b.firebaseapp.com",
  projectId: "emitrr-assignment-89a9b",
  storageBucket: "emitrr-assignment-89a9b.appspot.com",
  messagingSenderId: "898448783372",
  appId: "1:898448783372:web:2f5320ccf9a5291a37d629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };