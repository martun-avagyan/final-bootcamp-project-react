import React from "react";
import StyledCard from "./Card.styled";

export default function Card (url) {
	return (
		<StyledCard>
			<img width="140px" height="140 px" src={url.url} alt="unsolved"></img>
		</StyledCard>
	);
}