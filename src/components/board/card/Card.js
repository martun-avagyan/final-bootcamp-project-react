import React from "react";
import StyledCard from "./Card.styled";


function Card({cardImg, title, price}) {
	return (
		<StyledCard>
			<div>
				<img style={{
					marginTop: "5%",
					width: "90%",
					height: "270px",
				}} src={cardImg}></img>
			</div>
			<div>
				<p>Brand Jeans{title}</p>
				<p>10${price}</p>
			</div>
		</StyledCard>
	);
}

export default Card;