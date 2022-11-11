import styled from "styled-components";

export const StyledAside = styled.aside`
	min-height: calc(100vh - 60px);
	background-color: lightgray;
	padding: 20px;
	width: 200px;
	position: fixed;
	top: 60px;
	left: 0;
	bottom: 0;
	z-index: 0;

	@media screen and (max-width: 769px) {
		width: 110px;
		padding: 10px;
	}
`;

export const StyledFilter = styled.div`
	padding-block: 20px;
	border-bottom: 1px solid ${(props) => props.theme.white};

	h3 {
		font-weight: 500;
		margin-bottom: 5px;
	}
	ul {
		list-style: none;

		li {
			a {
				text-decoration: none;
				color: ${(props) => props.theme.secondary};
			}
		}
	}
`;

export const StyledSearchInfo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 30px;

	& > div:first-of-type {
		display: flex;
		align-items: center;
		button {
			margin-left: 10px;
		}
	}
	& > div:last-of-type {
		display: flex;
		gap: 10px;
		select {
			cursor: pointer;
		}
	}

	@media screen and (max-width: 769px) {
		justify-content: flex-end;
		margin-bottom: 10px;
		& > div:first-of-type {
			display: none;
		}
		& > div:last-of-type {
			select {
				width: 120px;
			}
		}
	}
`;
