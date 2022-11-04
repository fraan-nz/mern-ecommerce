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

	.order {
		width: 100%;
		display: flex;
		gap: 20px;
		flex-wrap: wrap;

		.order-info {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
			.order-card {
				flex: 0 1 100%;
			}

			.order-card:not(:last-of-type) {
				flex: 0 1 auto;
				min-height: min-content;
				min-width: min-content;
			}
		}

		.order-card,
		.order-total {
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

				@media screen and (max-width: 488px) {
					grid-template-areas:
						"image title title"
						"image quantity price";
					grid-template-columns: 70px 1fr 1fr;
					grid-template-rows: auto;

					img {
						grid-area: image;
					}
					a {
						grid-area: title;
					}
					span {
						display: flex;
						flex-direction: column;
						align-items: center;
						text-align: center;

						strong {
							grid-area: quantity;
						}
					}
				}

				img {
					width: 100%;
				}
			}
		}

		.order-total {
			min-width: 200px;
			width: max-content;
			height: max-content;
			div,
			strong {
				display: grid;
				grid-template-columns: 100px 1fr;
				grid-template-rows: auto;
				padding: 5px;
			}
			div {
				border-bottom: 1px solid lightgray;
			}

			.order-total {
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
	}
`;
