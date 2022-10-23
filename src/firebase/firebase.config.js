// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnmVrNlbDlrA_kKQsGgR5Bf2l3p8IRIu4",
    authDomain: "dragon-news-app.firebaseapp.com",
    projectId: "dragon-news-app",
    storageBucket: "dragon-news-app.appspot.com",
    messagingSenderId: "93805761212",
    appId: "1:93805761212:web:8d0b4a1601d9f41c2ab6b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;