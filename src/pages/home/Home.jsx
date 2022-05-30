import React from "react";
import { useState, useEffect } from "react";
import Slider from "../../components/slider/Slider";
import Nav from "../../components/navbar/Nav";
import Board from "../../components/board/Board";
import ItemSelector from "../../components/ItemSelector/ItemSelector";

function Home() {

	const [isVisible, setIsVisible] = useState(true);
	const [height, setHeight] = useState(0);

	useEffect(() => {   
		window.addEventListener("scroll", listenToScroll);
		return () => 
			window.removeEventListener("scroll", listenToScroll); 
	}, []);

	React.useEffect(() => {
		return (() => {
			console.log(isVisible);
		});
	}, [isVisible]);
	

	const listenToScroll = () => {
		let heightToHideFrom = 42;
		const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
		setHeight(winScroll);

		if (winScroll > heightToHideFrom) {  
			isVisible && setIsVisible(false);
		} else {
			setIsVisible(true);
		}  
	};

	return (
		<div>
			<Nav />
			{height}
			{!isVisible && "Here Must Be Search Component"};
			{isVisible && <ItemSelector />}
			<Slider />
			<Board />
		</div>
	);
}

export default Home;