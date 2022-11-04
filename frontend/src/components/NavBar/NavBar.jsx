import React, { useState, useEffect, useRef } from "react";
import Badge from "../Badge/Badge";
import {
	Nav,
	StyledLink,
	Bars,
	NavMenu,
	Container,
	StyledDropDown,
} from "./StyledNavBar";
import { useDispatch, useSelector } from "react-redux";
import { totalQuantity } from "../../utils/quantityReducer";
import { logoutUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const [openNav, setOpenNav] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const { prodsInCart } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const ref = useRef();

	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		}
	}, [userInfo]);

	useEffect(() => {
		const clickOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handleOpenNav();
			}
		};

		document.addEventListener("click", clickOutside);

		return () => {
			document.removeEventListener("click", clickOutside);
		};
	}, []);

	const handleOpenNav = () => {
		setOpenNav(!openNav);
	};

	const handleOpenDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
		<Nav>
			<Container>
				<StyledLink to="/" className="brand">
					E-commerce
				</StyledLink>
				<NavMenu isOpen={openNav} ref={menu}>
					<StyledLink
						to="/cart"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Cart{" "}
						{prodsInCart.length > 0 && (
							<Badge inCart={totalQuantity(prodsInCart)} />
						)}
					</StyledLink>
					<div className="dropdown__container">
						{userInfo ? (
							<button onClick={handleOpenDropdown}>{userInfo.name}</button>
						) : (
							<StyledLink
								to="/signin"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Sign In
							</StyledLink>
						)}
						{userInfo ? (
							<StyledDropDown open={dropdown}>
								<StyledLink to="/profile">User Profile</StyledLink>
								<StyledLink to="/orderhistory">Order History</StyledLink>
								<button onClick={() => dispatch(logoutUser())}>Sign Out</button>
							</StyledDropDown>
						) : null}
					</div>
				</NavMenu>
				<Bars onClick={handleOpenNav} />
			</Container>
		</Nav>
	);
};

export default NavBar;
