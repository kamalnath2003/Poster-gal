// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
// import axios from "axios";
// import { useEffect } from "react";
// import { data } from "autoprefixer";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const apikey = import.meta.env.VITE_FIREBASE_API_KEY;
// const auth = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
// const projectid = import.meta.env.VITE_FIREBASE_PROJECT_ID;
// const storagebucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
// const messagingSenderid = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
// const appId = import.meta.env.VITE_FIREBASE_APP_ID;

// const newdata = async () =>
//   await axios.get("http://localhost:8000/").then((data) => {
//     return data.data;
//   });

// const credentials = await newdata();

// // const firebaseConfig = {
// //   apiKey: daata.apikey,
// //   authDomain: daata.auth,
// //   projectId: daata.projectid,
// //   storageBucket: daata.storagebucket,
// //   messagingSenderId: daata.messagingSenderid,
// //   appId: daata.appId,
// //   measurementId: "G-901D7VLHYK",
// // };

// // Initialize Firebase

// // Initialize Firebase
// const app = initializeApp(credentials);
// const analytics = getAnalytics(app);
// export const storage = getStorage(app);
// export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
