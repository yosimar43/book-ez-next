import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
