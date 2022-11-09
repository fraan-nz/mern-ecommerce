import styled from "styled-components";

export const StyledTable = styled.div`
	overflow: hidden;
	margin-top: 40px;
	table {
		background-color: ${(props) => props.theme.secondary};
		width: 100%;
		text-align: center;
		border-radius: 5px;

		thead {
			tr {
				color: ${(props) => props.theme.white};
				background-color: ${(props) => props.theme.secondary};
			}
		}
		tbody {
			tr {
				padding: 100px;
				background-color: ${(props) => props.theme.white};
				&:nth-of-type(2n) {
					background-color: lightgray;
				}
				td {
					padding-block: 5px;

					&:first-child {
						max-width: 100px;
					}

					button {
						background: ${(props) => props.theme.secondary};
						color: ${(props) => props.theme.white};
						padding: 2px;
						border: none;
						border-radius: 2px;
						cursor: pointer;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1200px) {
		overflow-x: scroll;
		table {
			tr {
				td:nth-child(1) {
					min-width: 220px;
				}
				td:nth-child(2) {
					min-width: 90px;
				}
				td:nth-child(3) {
					min-width: 90px;
				}
				td:nth-child(4) {
					min-width: 85px;
				}
				td:nth-child(5) {
					width: min-content;
				}
				td:nth-child(5) {
					width: min-content;
				}
			}
		}
	}
`;
