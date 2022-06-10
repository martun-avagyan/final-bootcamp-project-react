import React from "react";
//import { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import carouselData from "./images";
import StyledSlider from "./Slider.styled";

export default function Slider() {
	//const [images, setImages] = carouselData;
	const images = carouselData;
	const breakPoints = [
		{width: 1, itemsToShow: 1, transitionMs: 200, itemsToScroll: 1, focusOnSelect: true, pagination: false},
		{width: 512, itemsToShow: 2, transitionMs: 300, itemsToScroll: 1, focusOnSelect: true, pagination: false},
		{width: 768, itemsToShow: 4, transitionMs: 400, itemsToScroll: 2, focusOnSelect: true, pagination: false},
		{width: 1024, itemsToShow: 6, transitionMs: 600, itemsToScroll: 2, focusOnSelect: true, pagination: false},
	];

	return (
		<StyledSlider>
			<Carousel breakPoints={breakPoints}>
				{images.map((image) => {
					return <Card key={Math.random()} url={image}/>;
				})}
			</Carousel>
		</StyledSlider>
	);
}