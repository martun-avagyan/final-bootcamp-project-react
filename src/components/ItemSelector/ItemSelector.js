import React from "react";
import { useState } from "react";
import StyledItemSelector from "./ItemSelector.styled";
import MiniSelector from "./miniSelector/MiniSelector";
import selectorData from "./images";

function ItemSelector() {

	const [imageSelectorData, setImageSelectorData] = useState(selectorData);

	function mood(id) {
		setImageSelectorData(imageSelectorData.map((image) => {
			if(image.id === id) {
				return id;
			} else {
				return image;
			}
		}));
	}

	return (
		<StyledItemSelector>
			{imageSelectorData.map((image, index) => <MiniSelector id={index} mood={mood} key={Math.random()} url={image}/>)}
		</StyledItemSelector>
	);
}

export default ItemSelector;