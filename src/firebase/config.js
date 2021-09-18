import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXLljZnDpGQaZntOh0HRNa5Lk78pcK4Fo",
  authDomain: "image-repo-880de.firebaseapp.com",
  projectId: "image-repo-880de",
  storageBucket: "image-repo-880de.appspot.com",
  messagingSenderId: "231457801318",
  appId: "1:231457801318:web:8444dc047ab16ab5d599a7",
  measurementId: "G-CTLPXFLL5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage and Firestore Storage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };