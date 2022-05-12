import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBiZHLStyGolusjo-70z9SKJqbDPwxu4Vg",
  authDomain: "best-shop-77fb0.firebaseapp.com",
  projectId: "best-shop-77fb0",
  storageBucket: "best-shop-77fb0.appspot.com",
  messagingSenderId: "276674489033",
  appId: "1:276674489033:web:e02cfa9151645054917b18",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
export const db = getFirestore(app);

