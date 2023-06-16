// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqo0W1uLIyug9pVXqU4chPocmDgkRuQBM",
    authDomain: "the-news-dragon-60599.firebaseapp.com",
    projectId: "the-news-dragon-60599",
    storageBucket: "the-news-dragon-60599.appspot.com",
    messagingSenderId: "120925705050",
    appId: "1:120925705050:web:32bdf64dc4d764952a5963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;