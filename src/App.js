import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/LogIn";
import setStorage from "./helpers/setStorage";
import Logout from "./components/Logout";
import { auth } from "./api/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Routes, Route } from "react-router-dom";

function App() {
  onAuthStateChanged(auth, (currentUser) => {
    currentUser ? setStorage(currentUser.uid) : setStorage(false);
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Logout />
    </>
  );
}

export default App;
