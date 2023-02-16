import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD46kLHtgEbm8MrJJgYa7xRAmSMrsXBiCg",
  authDomain: "auth-3e40c.firebaseapp.com",
  projectId: "auth-3e40c",
  storageBucket: "auth-3e40c.appspot.com",
  messagingSenderId: "742441430748",
  appId: "1:742441430748:web:466bbc3c3993715fa0ce19",
  measurementId: "G-5KFC86S5WQ"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const db = getFirestore(app);

export {auth}
