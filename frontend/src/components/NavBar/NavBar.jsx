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
import SearchBox from "./SearchBox";

const NavBar = () => {
	const [openNav, setOpenNav] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const { prodsInCart } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const menuRef = useRef();
	const btnRef = useRef();
	useOnClickOutside({ btnRef, menuRef }, () => {
		setOpenNav(false);
		setDropdown(false);
	});

	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		}
	}, [userInfo]);

	const handleOpenNav = () => {
		setOpenNav(!openNav);
		setDropdown(false);
	};

	const handleOpenDropdown = () => {
		setDropdown(!dropdown);
	};

	const signoutHandler = () => {
		dispatch(logoutUser());
		window.location.href = "/signin";
	};

	return (
		<Nav>
			<Container>
				<StyledLink to="/" className="brand">
					<span>Sport</span>
					<span>store</span>
				</StyledLink>
				<SearchBox />
				<NavMenu isOpen={openNav} ref={menuRef}>
					<StyledLink
						to="/cart"
						onClick={() => setOpenNav(false)}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Cart
						{prodsInCart.length > 0 && (
							<Badge inCart={totalQuantity(prodsInCart)} />
						)}
					</StyledLink>
					<ul className="dropdown__container">
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
								<StyledLink to="/profile" onClick={handleOpenNav}>
									User Profile
								</StyledLink>
								<StyledLink to="/ordershistory" onClick={handleOpenNav}>
									Order History
								</StyledLink>
								<button className="sign-out" onClick={signoutHandler}>
									Sign Out
								</button>
							</StyledDropDown>
						) : null}
					</ul>
				</NavMenu>
				<button className="burger__btn" onClick={handleOpenNav} ref={btnRef}>
					<FaBars />
				</button>
			</Container>
		</Nav>
	);
};

export default NavBar;
