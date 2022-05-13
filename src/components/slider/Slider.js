import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import styles from "./styles.module.css"

import image1 from "../../Assets/ShopItems/Colorized/SVG/Asset 5.svg"
import image2 from "../../Assets/ShopItems/Colorized/SVG/Asset 8.svg"
import image3 from "../../Assets/ShopItems/Colorized/SVG/Asset 9.svg"
import image4 from "../../Assets/ShopItems/Colorized/SVG/Asset 15.svg"
import image5 from "../../Assets/ShopItems/Colorized/SVG/Asset 17.svg"
import image6 from "../../Assets/ShopItems/Colorized/SVG/Asset 20.svg"
import image7 from "../../Assets/ShopItems/Colorized/SVG/Asset 21.svg"
import image8 from "../../Assets/ShopItems/Colorized/SVG/Asset 22.svg"
import image9 from "../../Assets/ShopItems/Colorized/SVG/Asset 26.svg"
import image10 from "../../Assets/ShopItems/Colorized/SVG/Asset 30.svg"
import image11 from "../../Assets/ShopItems/Colorized/SVG/Asset 32.svg"
import image12 from "../../Assets/ShopItems/Colorized/SVG/Asset 39.svg"
import image13 from "../../Assets/ShopItems/Colorized/SVG/Asset 43.svg"
import image14 from "../../Assets/ShopItems/Colorized/SVG/Asset 45.svg"

const carouselData = [
	image1,
	image2, 
	image3, 
	image4, 
	image5, 
	image6, 
	image7, 
	image8, 	
	image9, 
	image10, 
	image11, 
	image12, 
	image13, 
	image14,
]

export default function Slider() {
	const breakPoints = [
    {width: 1, itemsToShow: 1, transitionMs: 200, itemsToScroll: 2, focusOnSelect: true, pagination: false},
    {width: 512, itemsToShow: 2, transitionMs: 300, itemsToScroll: 2, focusOnSelect: true, pagination: false},
    {width: 768, itemsToShow: 3, transitionMs: 400, itemsToScroll: 2, focusOnSelect: true, pagination: false},
    {width: 1024, itemsToShow: 6, transitionMs: 600, itemsToScroll: 2, focusOnSelect: true, pagination: false},
  ]

  return (
    <div className={styles.Slider}>
      <Carousel breakPoints={breakPoints}>
				{carouselData.map((image) => {
					return <Card url={image}/>
				})}
      </Carousel>
    </div>
  );
}