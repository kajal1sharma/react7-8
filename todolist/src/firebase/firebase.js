// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection, getDocs, connectFirestoreEmulator} from "firebase/firestore/lite"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj_IKN9_l1pL9o71N_e5-FcXCgfLjCYEQ",
  authDomain: "todolist-476d3.firebaseapp.com",
  projectId: "todolist-476d3",
  storageBucket: "todolist-476d3.appspot.com",
  messagingSenderId: "218351241982",
  appId: "1:218351241982:web:d1e6284f6bc18ddb4ab3af",
  measurementId: "G-3H13KTWNJQ"
};
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export default db;
// Initialize Firebase


