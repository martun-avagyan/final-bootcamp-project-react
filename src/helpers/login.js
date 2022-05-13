import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebaseConfig";
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error.message);
  }
};
export default login;
