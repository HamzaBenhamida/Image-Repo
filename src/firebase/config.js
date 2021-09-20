// import { initializeApp } from 'firebase/app';
// import { getFirestore} from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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
firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();
const firestoreDatabase = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseStorage, firestoreDatabase, timestamp };