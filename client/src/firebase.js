// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-10666.firebaseapp.com",
    projectId: "mern-blog-10666",
    storageBucket: "mern-blog-10666.appspot.com",
    messagingSenderId: "332689303368",
    appId: "1:332689303368:web:05bc7ce53ee897473cb57d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);