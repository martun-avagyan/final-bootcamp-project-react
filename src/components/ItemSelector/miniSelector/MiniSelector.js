import React from "react";
import StyledMiniSelector from "./MiniSelector.styled";

function MiniSelector({url, mood, id}) {

	return (
		<StyledMiniSelector>
			<img width="36px" onClick={() => mood(id)} height="36px" src={url} alt="unsolved"></img>
		</StyledMiniSelector>
	);
}

export default MiniSelector;