// src/firebase_config.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANqYBanhYbVQl7FNuXVzDJKx9eR5keuTs",
  authDomain: "linkedin-clone-69bc6.firebaseapp.com",
  projectId: "linkedin-clone-69bc6",
  storageBucket: "linkedin-clone-69bc6.firebaseapp.com",
  messagingSenderId: "137533145160",
  appId: "1:137533145160:web:460fb02cd3dc4eff88187d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
