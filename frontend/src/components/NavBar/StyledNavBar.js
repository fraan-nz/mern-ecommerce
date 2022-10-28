import { FaBars } from "react-icons/fa";
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
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	gap: 25px;
	list-style: none;

	@media screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		background-color: ${(props) => props.theme.secondary};
		color: ${(props) => props.theme.primary};
		position: absolute;
		left: 0;
		top: 60px;
		height: 130px;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.8s ease;

		${(props) => props.isOpen && `max-height: 130px; `}
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

export const Bars = styled(FaBars)`
	display: none;
	color: ${(props) => props.theme.white};
	font-size: 1.8rem;
	@media screen and (max-width: 768px) {
		display: block;
		cursor: pointer;
	}
`;
