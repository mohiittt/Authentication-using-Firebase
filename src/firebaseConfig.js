// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiuxE7SLtTekVFbrk3osllqyIkKGtQSSU",
  authDomain: "react-firebase-1504.firebaseapp.com",
  projectId: "react-firebase-1504",
  storageBucket: "react-firebase-1504.appspot.com",
  messagingSenderId: "166701450614",
  appId: "1:166701450614:web:556ac7303891d1373ca657",
  measurementId: "G-WL2KJ1EGQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
