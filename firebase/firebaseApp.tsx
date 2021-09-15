import firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default function firebaseApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyB82G51R_SWwou-3cUFv9s4SgTqVKyjITg",
    authDomain: "book-ez.firebaseapp.com",
    projectId: "book-ez",
    storageBucket: "book-ez.appspot.com",
    messagingSenderId: "5320124517",
    appId: "1:5320124517:web:cc869d3fcd01d50698fe8c",
    measurementId: "G-EDZCRMCYGZ",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

