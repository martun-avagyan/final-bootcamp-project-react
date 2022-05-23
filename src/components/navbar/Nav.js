import React from "react";
import StyledNav from "./Nav.styled";
import CartSVG from "../../Assets/More/B&W/SVG/Asset 21.svg";
import UserSVG from "../../Assets/More/B&W/SVG/Asset 26.svg";

function Nav() {
	return (
		<StyledNav>
			<div><h2 style={{color: "white"}}>You Shop</h2></div>
			<div style={{display: "flex", width: "100px", justifyContent: "space-between"}}>
				<img style={{cursor: "pointer"}} src={CartSVG} alt="Cart" width="30px" height="30px"/>
				<img style={{cursor: "pointer"}} src={UserSVG} alt="User" width="30px" height="30px"/>
			</div>
		</StyledNav>
	);
}

export default Nav;