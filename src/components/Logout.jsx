import React from "react";
import { auth } from "../api/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";

export default function Logout() {
  const [user, setUser] = useState();
  onAuthStateChanged(auth, (curUser) => {
      setUser(curUser)
  })
  return (
    <div>
      <button onClick={() =>  signOut(auth)}>Logout</button>
      {user?.email}
    </div>
  );
}
