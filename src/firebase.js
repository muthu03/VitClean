import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm_4uF_y4XOHQQ03JcWqe1BX_fKa0LgvQ",
  authDomain: "vitclean-a2e43.firebaseapp.com",
  projectId: "vitclean-a2e43",
  storageBucket: "vitclean-a2e43.appspot.com",
  messagingSenderId: "47103072766",
  appId: "1:47103072766:web:3a0b90ba534bd3e2cc08af",
  measurementId: "G-3N4RH87RHG"
};

// Initialize Firebase and Firebase Authentication
export const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const db = getFirestore(app);

export {auth}
