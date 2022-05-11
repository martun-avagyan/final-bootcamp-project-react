import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="categories/sthg" element={<Expenses />} />
				<Route path="invoices" element={<Invoices />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);


reportWebVitals();
