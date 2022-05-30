import React from "react";
import StyledBoard from "./Board.styled";
import Card from "./card/Card";

function Board() {
	return (
		<StyledBoard>
			{/*here should be fetched data and mapping over it, this cards for examples*/}
			<Card />
			<Card />
			<Card />	
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</StyledBoard>
	);
}

export default Board;