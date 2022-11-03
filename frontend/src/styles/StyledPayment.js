import styled from "styled-components";

export const StyledOrder = styled.div`
	h1 {
		margin-block: 50px;
	}

	.address,
	.payment {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		label {
			display: grid;
			grid-template-columns: 100px 180px;
			grid-template-rows: auto;
			justify-content: center;
			text-align: end;
			gap: 15px;

			input {
				padding-left: 5px;
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
			margin-top: 30px;
		}
	}

	.payment {
		label {
			grid-template-columns: 50px 50px;
			text-align: start;
		}
	}

	.order-card {
		border: 1px solid lightgray;
		border-radius: 2px;
		padding: 1.5rem;
		vertical-align: top;

		h3 {
			margin-bottom: 20px;
			text-decoration: underline;
		}

		.order-items {
			display: grid;
			grid-template-columns: 100px 1fr 1fr 1fr;
			grid-template-rows: auto;
			justify-items: center;
			align-items: center;
			margin-bottom: 20px;

			img {
				width: 100%;
			}
		}
	}
	.order-card:not(:last-of-type) {
		display: inline-block;
		max-width: max-content;
		margin-bottom: 30px;
		margin-right: 30px;
	}
`;
