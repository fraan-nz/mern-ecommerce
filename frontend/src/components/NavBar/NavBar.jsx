import React, { useState } from "react";
import Badge from "../Badge/Badge";
import { Nav, StyledLink, Bars, NavMenu, Container } from "./StyledNavBar";
import { useSelector } from "react-redux";
import { totalQuantity } from "../../utils/quantityReducer";

const NavBar = () => {
	const [openNav, setOpenNav] = useState(false);
	const { prodsInCart } = useSelector((state) => state.cart);

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
						Cart{" "}
						{prodsInCart.length > 0 && (
							<Badge inCart={totalQuantity(prodsInCart)} />
						)}
					</StyledLink>
					<StyledLink
						to="/signin"
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
