// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvyvZDOzlDuMZpa7kiw_Mog2iTFtzmcys",
  authDomain: "netflixgpt-22.firebaseapp.com",
  projectId: "netflixgpt-22",
  storageBucket: "netflixgpt-22.firebasestorage.app",
  messagingSenderId: "458355585386",
  appId: "1:458355585386:web:9d4403def3e3e39e41b513",
  measurementId: "G-HS210ER2KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();