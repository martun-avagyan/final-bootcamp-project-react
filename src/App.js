import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<>
			<div>
				<Link to="categories">clothes</Link>  
			</div>
			<div>
				<Link to="auth">Log In: Log Out</Link>
			</div>
			<div>
				<Link to="cart">Cart</Link>
			</div>
			<div>
				<Link to="profile">Profile</Link>
			</div>
		</>
	);
}

export default App;
 