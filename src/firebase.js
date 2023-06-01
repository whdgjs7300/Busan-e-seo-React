// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlS_xHI2I2KvXvAyYOdS5twflFf-5O1Bc",
    authDomain: "jongheon-coding.firebaseapp.com",
    projectId: "jongheon-coding",
    storageBucket: "jongheon-coding.appspot.com",
    messagingSenderId: "619596354854",
    appId: "1:619596354854:web:e8eb06e181b9c8ebbf5de7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
//

export { firebaseAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword };