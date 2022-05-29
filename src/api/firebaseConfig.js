import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDAwqj0a-jOCzH_KnOjqzfSZXKonuOXVGA",
  authDomain: "aca-finals.firebaseapp.com",
  projectId: "aca-finals",
  storageBucket: "aca-finals.appspot.com",
  messagingSenderId: "575141585152",
  appId: "1:575141585152:web:bfd3a80db246c39521d3e5",
  measurementId: "G-CFG6975GTW"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
export const db = getFirestore(app);
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
