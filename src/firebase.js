// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUZ9JxV8QisJMULkRRM7-VIyJa9BSd-GA",
  authDomain: "redux-adaa5.firebaseapp.com",
  databaseURL: "https://redux-adaa5-default-rtdb.firebaseio.com",
  projectId: "redux-adaa5",
  storageBucket: "redux-adaa5.appspot.com",
  messagingSenderId: "50944761301",
  appId: "1:50944761301:web:14aa9ffac9345b3598315c",
  measurementId: "G-VEDFN13FDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);