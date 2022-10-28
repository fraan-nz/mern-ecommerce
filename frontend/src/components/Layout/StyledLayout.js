import styled from "styled-components";

export const StyledLayout = styled.main`
	display: flex;
	justify-content: center;
	margin-top: 60px;
`;

export const StyledContainer = styled.div`
	width: 100%;
	max-width: 1400px;
	min-height: calc(100vh - 60px);
	padding-inline: 5%;
	padding-block: 40px;

	@media screen and (max-width: 768px) {
		padding-inline: 5%;
	}
`;
