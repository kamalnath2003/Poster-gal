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

const  apikey =import.meta.env.VITE_FIREBASE_API_KEY 
const  auth =import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const  projectid =import.meta.env.VITE_FIREBASE_PROJECT_ID
const  storagebucket =import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
const  messagingSenderid =import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
const  appId =import.meta.env.VITE_FIREBASE_APP_ID



const firebaseConfig = {
  apiKey: apikey,
  authDomain:auth,
  projectId: projectid,
  storageBucket: storagebucket,
  messagingSenderId:messagingSenderid,
  appId:appId,
  measurementId: "G-901D7VLHYK"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const db = getFirestore(app)