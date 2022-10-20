import React, { useState } from "react";
import { Nav, StyledLink, Bars, NavMenu, Container } from "./StyledNavBar";

const NavBar = () => {
	const [openNav, setOpenNav] = useState(false);

	const handleOpenNav = () => {
		setOpenNav(!openNav);
	};

	return (
		<Nav>
			<Container>
				<StyledLink to="/" className="brand">
					E-commerce
				</StyledLink>
				<NavMenu isOpen={openNav}>
					<StyledLink
						to="/cart"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Cart
					</StyledLink>
					<StyledLink
						to="/sigin"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Sign In
					</StyledLink>
				</NavMenu>
				<Bars onClick={() => handleOpenNav()} />
			</Container>
		</Nav>
	);
};

export default NavBar;
