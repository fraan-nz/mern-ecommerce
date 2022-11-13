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

	@media screen and (max-width: 769px) {
		width: 115px;
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

				&.active {
					text-decoration: underline;
				}
			}
		}
	}
	@media screen and (max-width: 769px) {
		padding-block: 5px;
		ul {
			font-size: 0.9rem;
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
			background: none;
			border: none;
			font-size: 1.2rem;
			line-height: 0;
			cursor: pointer;
		}
	}
	& > div:last-of-type {
		display: flex;
		gap: 10px;
		margin-left: auto;
		select {
			cursor: pointer;
		}
	}

	@media screen and (max-width: 769px) {
		justify-content: flex-end;
		flex-wrap: wrap;
		margin-bottom: 10px;
		& > div:first-of-type {
			font-size: 0.8rem;
		}
		& > div:last-of-type {
			select {
				width: 120px;
			}
		}
	}
`;
