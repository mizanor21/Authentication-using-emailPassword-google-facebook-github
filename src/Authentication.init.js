// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDY8mSYFpF5cokLEeW78hbH7NULeZg9CcY",
    authDomain: "practice-authentication-4d77a.firebaseapp.com",
    projectId: "practice-authentication-4d77a",
    storageBucket: "practice-authentication-4d77a.appspot.com",
    messagingSenderId: "616093695425",
    appId: "1:616093695425:web:4081f16d8c033713054340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;