// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getStorage} from 'firebase/storage';
import{getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5wSlyo6qEDZy_h7eZFEdL7CwO19YjLWo",
  authDomain: "crucian-80f42.firebaseapp.com",
  projectId: "crucian-80f42",
  storageBucket: "crucian-80f42.appspot.com",
  messagingSenderId: "264751544700",
  appId: "1:264751544700:web:14cbef6ee78fe6fd568cf9",
  measurementId: "G-901D7VLHYK"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const db = getFirestore(app)