import React, { useState, useEffect, useRef } from "react";
import Badge from "../Badge/Badge";
import {
	Nav,
	StyledLink,
	NavMenu,
	Container,
	StyledDropDown,
} from "./StyledNavBar";
import { useDispatch, useSelector } from "react-redux";
import { totalQuantity } from "../../utils/quantityReducer";
import { logoutUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
	const [openNav, setOpenNav] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const { prodsInCart } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const menuRef = useRef();
	const btnRef = useRef();
	useOnClickOutside({ btnRef, menuRef }, () => setOpenNav(false));

	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		}
	}, [userInfo]);

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
				<NavMenu isOpen={openNav} ref={menuRef}>
					<StyledLink
						to="/cart"
						onClick={() => setOpenNav(false)}
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
								onClick={() => setOpenNav(false)}
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
				<button className="burger__btn" onClick={handleOpenNav} ref={btnRef}>
					<FaBars />
				</button>
			</Container>
		</Nav>
	);
};

export default NavBar;
