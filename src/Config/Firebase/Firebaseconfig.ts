// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTi5Ep4HP33D_WRSbSkviM4QYubvxjdZg",
  authDomain: "institute-software-react.firebaseapp.com",
  projectId: "institute-software-react",
  storageBucket: "institute-software-react.appspot.com",
  messagingSenderId: "761014155955",
  appId: "1:761014155955:web:3e078c0dc4360043ed0ec6",
  measurementId: "G-PEF4RLDS55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);