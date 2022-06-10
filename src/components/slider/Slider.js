import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import styles from "./styles.module.css";
import carouselData from './images';

export default function Slider() {
	const images = carouselData;
	const breakPoints = [
    {width: 1, itemsToShow: 1, transitionMs: 200, itemsToScroll: 2, focusOnSelect: true, pagination: false},
    {width: 512, itemsToShow: 2, transitionMs: 300, itemsToScroll: 2, focusOnSelect: true, pagination: false},
    {width: 768, itemsToShow: 3, transitionMs: 400, itemsToScroll: 2, focusOnSelect: true, pagination: false},
    {width: 1024, itemsToShow: 6, transitionMs: 600, itemsToScroll: 2, focusOnSelect: true, pagination: false},
  ]

  return (
    <div className={styles.Slider}>
      <Carousel breakPoints={breakPoints}>
				{images.map((image) => {
					return <Card url={image}/>
				})}
      </Carousel>
    </div>
  );
}