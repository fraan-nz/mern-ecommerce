import React from "react";
import { StyledLayout, StyledContainer } from "./StyledLayout";

function Layout({ children }) {
	return (
		<StyledLayout>
			<StyledContainer>{children}</StyledContainer>
		</StyledLayout>
	);
}

export default Layout;
