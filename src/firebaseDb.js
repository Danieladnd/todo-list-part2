import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAeTN6KLZ92Tb-_ILCtbJ-NVWNA9WMn3s",
    authDomain: "quasartodolist-b9cde.firebaseapp.com",
    projectId: "quasartodolist-b9cde",
    storageBucket: "quasartodolist-b9cde.firebasestorage.app",
    messagingSenderId: "20795584332",
    appId: "1:20795584332:web:6e20aefedc5ecb1deaa9e9",
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
