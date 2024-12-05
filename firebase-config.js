// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnurBfQiyY0BNzuJaVG15BaDZmcp1XvK8",
  authDomain: "auth-4f6c3.firebaseapp.com",
  projectId: "auth-4f6c3",
  storageBucket: "auth-4f6c3.firebasestorage.app",
  messagingSenderId: "115652694233",
  appId: "1:115652694233:web:37d61293960f4da36eaec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)