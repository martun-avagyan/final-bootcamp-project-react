import React, { useState } from "react";
import classes from "./SingleProductItem.module.css";

const SingleProductItem = () => {
	const productImages = ["https://m.media-amazon.com/images/I/41IeG1wnHNL._AC_UY395_.jpg","https://m.media-amazon.com/images/I/41ybcXgSW-L._AC_UY500_.jpg", "https://m.media-amazon.com/images/I/41l3GZL-NEL._AC_UY500_.jpg"];
	

	const [mainImage,setMainImage] = useState(productImages[0]);

	const changeImage = (e) => {
		setMainImage(e.target.src);
	};
	return (
		<>
			<div className={classes.singleProductItemContainer}>
				<div className={classes.singleProductImageSlider}>
					<div className={classes.imagesSidebar}>
						{productImages.map((image, index) => {
							return <div className={classes.imageLeftSlider} key={index}>
								<img onMouseEnter={changeImage}  src={image} alt="Product Image" />
							</div>;
						})}
						
					</div>
					<div className={classes.mainImage}><img src={mainImage} alt="" /></div>	
				</div> 
				<div className={classes.singleProductItemInfo}>
					<div className="singleItemTitle">Title</div>
					<div className="singleItemDescription">Description</div>
					<div className="singleItemPrice">Price</div>
					<div className="singleItemQuantity">Quantity</div>
					<div className="singleItemAddToCart">Add to Cart</div>
					
				</div>
			</div>

		</>
	);
};

export default SingleProductItem;