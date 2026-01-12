// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh9whN6lbkF9NNWuEDXQpBCrJRcoi07SM",
  authDomain: "assignment-9-23e8d.firebaseapp.com",
  projectId: "assignment-9-23e8d",
  storageBucket: "assignment-9-23e8d.firebasestorage.app",
  messagingSenderId: "77348639656",
  appId: "1:77348639656:web:937fa905477ce95f77839d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);