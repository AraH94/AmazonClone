import React, { useEffect } from "react";
import "./style/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import { useStateValue } from "./StateProvider";
import { auth } from '../Firebase';

function App() {
	// FIREBASE LOGIN
	const [{ user }, dispatch] = useStateValue();

	// useEffect <<<<< POWERFUL
	// Piece of code which runs based on a given condition

	useEffect(() => {
		const unsubscribe = auth.OnAuthStateChanged((authUser) => {
			if (authUser) {
				//the user is logged in...
				dispatch({
					type: "SET_USER",
					user: authUser
				})
			} else {
				// the user is logged out
			}
		})
		return () => {
			// Any cleanup operation go in here...
			unsubscribe();
		}

	}, []);

	console.log('USER IS >>>', user)

	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					{/* This is the default route "/" */}
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App;