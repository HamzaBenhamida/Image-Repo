import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need

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
const projectStorage = getStorage(app);
const projectFirestore = getFirestore();
const timestamp = FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };