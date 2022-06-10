import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/LogIn";
import setStorage from "./helpers/setStorage";
import Logout from "./components/Logout";
import { auth } from "./api/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
function App() {
	onAuthStateChanged(auth, (currentUser) => {
		currentUser ? setStorage(currentUser.uid) : setStorage(false);
	});
	return (
		<>
			<h1 className="App">Home</h1>
			<Logout />
			<SignUp />
			<br></br>
			<Login />
		</>
	);
}

export default App;
