import React from "react";
import { useLocation } from "react-router-dom";
import {
	StyledLayout,
	StyledContainer,
	StyledAsideLayout,
	StyledAsideContainer,
} from "./StyledLayout";

function Layout({ children }) {
	const { pathname } = useLocation();

	return (
		<>
			{pathname === "/" || pathname.includes("/search") ? (
				<StyledAsideLayout>
					<StyledAsideContainer>{children}</StyledAsideContainer>
				</StyledAsideLayout>
			) : (
				<StyledLayout>
					<StyledContainer>{children}</StyledContainer>
				</StyledLayout>
			)}
		</>
	);
}

export default Layout;
