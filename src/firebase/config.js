// import { initializeApp } from 'firebase/app';
// import { getFirestore} from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//var admin = require('firebase-admin');

/*
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});
*/

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
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

//console.log(app);
// Initialize Firebase Storage and Firestore Storage
// const projectStorage = getStorage(app);
// const projectFirestore = getFirestore();
//console.log(projectStorage);
//debugger;

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

//const timestamp = projectStorage?.FieldValue?.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };