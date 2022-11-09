import styled from "styled-components";

export const StyledSignIn = styled.div`
	display: flex;
	justify-content: center;
	form {
		height: calc(90vh - 179px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		label {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			gap: 20px;
			font-weight: 600;
			position: relative;
			p {
				max-width: min-content;
				text-align: end;
			}
			input {
				width: 200px;
				height: 25px;
				padding-inline: 5px;
			}
			.form-error {
				position: absolute;
				font-size: 0.7rem;
				color: lightcoral;
				bottom: -19px;
				text-align: end;
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
				align-items: flex-start;
				gap: 3px;

				p {
					text-align: start;
					max-width: 100%;
				}
				input {
					width: 100%;
				}
			}
			button {
				margin-top: 10px;
			}
		}
	}
`;
