import styled from "styled-components";

const MiniSelector = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 52px;
	height: 52px;
	cursor: pointer;
	&:hover img{
		transform: scale(1.2);
		transition: 300ms;
	}
`;



export default MiniSelector;