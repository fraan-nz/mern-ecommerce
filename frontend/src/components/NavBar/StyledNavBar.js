import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: ${(props) => props.theme.primary};
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1400px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-inline: 5%;

	@media screen and (max-width: 768px) {
		padding-inline: 5%;
	}

	.burger__btn {
		display: none;
		color: ${(props) => props.theme.white};
		font-size: 1.8rem;
		background: none;
		border: none;
		@media screen and (max-width: 768px) {
			display: block;
			cursor: pointer;
		}
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	gap: 25px;
	list-style: none;

	@media screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		justify-content: space-evenly;
		gap: 0;
		background-color: ${(props) => props.theme.secondary};
		color: ${(props) => props.theme.primary};
		position: absolute;
		left: 0;
		top: 60px;
		height: 0px;
		transition: height 0.8s ease;
		overflow: hidden;
		z-index: 10;

		${(props) =>
			props.isOpen
				? `
			height: 120px;
			overflow: visible;
		`
				: ""}
	}

	.dropdown__container {
		position: relative;
		/* height: 300px; */
		width: 100%;
		text-align: center;

		button {
			background: none;
			border: none;
			color: ${(props) => props.theme.white};
			font-size: 1rem;
			cursor: pointer;
		}
	}
`;

export const StyledDropDown = styled.ul`
	display: flex;
	width: 110px;
	height: 0;
	background: ${(props) => props.theme.secondary};
	position: absolute;
	right: 0;
	top: 30px;
	flex-direction: column;
	overflow: hidden;
	justify-content: space-evenly;
	transition: height 0.3s ease;
	border-radius: 2px;

	a {
		color: lightgrey;

		&.active {
			color: lightgrey;
		}
		&:hover {
			color: lightgrey;
		}
	}

	button.sign-out {
		color: lightgrey;
		&:hover {
			color: lightgrey;
		}
	}

	${({ open }) => {
		return open
			? `
			height: 120px;
		`
			: "";
	}}

	@media screen and (max-width: 768px) {
		background: ${(props) => props.theme.accent};
		width: 100%;

		a {
			color: ${(props) => props.theme.primary};

			&.active {
				color: ${(props) => props.theme.primary};
			}
			&:hover {
				color: ${(props) => props.theme.primary};
			}
		}

		button.sign-out {
			color: ${(props) => props.theme.primary};
			&:hover {
				color: ${(props) => props.theme.primary};
			}
		}
	}
`;

export const StyledLink = styled(NavLink)`
	color: ${(props) => props.theme.white};
	text-decoration: none;
	position: relative;
	cursor: pointer;
	&.active {
		color: ${(props) => props.theme.accent};
	}
	&:hover {
		color: ${(props) => props.theme.accent};
	}
	&.brand {
		font-size: 1.3rem;
		font-weight: 600;
		color: ${(props) => props.theme.white};
		&:hover {
			color: ${(props) => props.theme.white};
		}
		&.active {
			color: ${(props) => props.theme.white};
		}
	}

	&:hover div > span {
		color: ${(props) => props.theme.white};
	}
	&.active div > span {
		color: ${(props) => props.theme.white};
	}
	@media screen and (max-width: 768px) {
		&.active {
			color: ${(props) => props.theme.accent};
		}
		&:hover {
			color: ${(props) => props.theme.accent};
		}
	}
`;
