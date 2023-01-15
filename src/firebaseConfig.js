// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLjmpzO64r63mymwEFVpAbW-0myVtILhw",
  authDomain: "react-fruits-9b25d.firebaseapp.com",
  projectId: "react-fruits-9b25d",
  storageBucket: "react-fruits-9b25d.appspot.com",
  messagingSenderId: "236334192269",
  appId: "1:236334192269:web:90df1705acdc22bba434c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
