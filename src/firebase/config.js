import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA23wwyfXhfj-TkuRzgHpV37ahecjJO2R4",
  authDomain: "todo-app-2d76f.firebaseapp.com",
  projectId: "todo-app-2d76f",
  storageBucket: "todo-app-2d76f.appspot.com",
  messagingSenderId: "500521036439",
  appId: "1:500521036439:web:f92b19401abae4b42897d2",
  measurementId: "G-746T69LLZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
