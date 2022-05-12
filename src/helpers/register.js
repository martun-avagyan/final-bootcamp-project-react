import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebaseConfig";
export default async function register(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
