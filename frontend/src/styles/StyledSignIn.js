import styled from "styled-components";

export const StyledSignIn = styled.div`
	form {
		height: calc(90vh - 179px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		label {
			width: 370px;
			display: flex;
			justify-content: flex-end;
			gap: 20px;
			font-weight: 600;
			input {
				width: 200px;
				height: 25px;
			}
		}
		button {
			display: block;
			font-weight: 400;
			font-size: 1.2rem;
			padding: 4px 10px;
			cursor: pointer;
			background-color: ${(props) => props.theme.accent};
			color: ${(props) => props.theme.secondary};
			border: 1px solid ${(props) => props.theme.secondary};
			border-radius: 2px;
		}
	}

	@media screen and (max-width: 768px) {
		form {
			gap: 10px;
			label {
				width: 100%;
				flex-direction: column;
				align-items: center;
				gap: 3px;
				p {
					width: 200px;
				}
			}
			button {
				margin-top: 10px;
			}
		}
	}
`;
