import styled from "styled-components";

export const StyledBadge = styled.div`
	width: 20px;
	height: 20px;
	position: absolute;
	right: -18px;
	bottom: -9px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
	background-color: red;
	cursor: pointer;

	& span {
		line-height: 0.8;
		margin-top: 1px;
	}
`;
