import React, { useState } from "react";
import "./ItemMainImages.css";

const ItemMainImages = () => {
	const [mainImage, setMainImage] = useState( "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png");
	
	const imagesArr = ["https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1110215_MUST_1_e7200ca9-0363-4f98-be1f-00bb3744c0d7_300x300.jpg?v=1643302897","https://cdn.shopify.com/s/files/1/0624/0605/products/NOTRE-CHICAGO-Stussy-DicePatternShirt-Mustard-1110215-MUST-72395_900x1350_crop_center.jpg?v=1646063449"];
	return (
		<>
			<div className="item-images--container">
				<div>
					<img className="item-image--main" src={mainImage} alt="Blue Shirt" />
				</div>
				<div className="item-image--options">
					{imagesArr.map((image,index) => {
						return (<img onClick={(e)=>{setMainImage(e.target.currentSrc); console.log(e);}} src={image} key={index}></img>);
					})}
				</div>
			</div>
		</>
	);
};

export default ItemMainImages;