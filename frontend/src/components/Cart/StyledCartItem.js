import styled from "styled-components";

export const StyledCartSection = styled.section`
	width: 100%;
	display: flex;
	gap: 20px;

	.empty {
		margin-top: 40px;
		text-align: center;
		width: 100%;
		font-size: 1.2rem;
	}

	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}

	.subtotal {
		height: max-content;
		width: max-content;
		padding: 20px;
		font-size: 2rem;
		text-align: center;
		line-height: 1.5;
		border: 1px solid lightgray;
		border-radius: 2px;

		.checkout {
			display: block;
			font-weight: 400;
			font-size: 1.2rem;
			padding: 4px 10px;
			cursor: pointer;
			background-color: ${(props) => props.theme.accent};
			color: ${(props) => props.theme.secondary};
			border: 1px solid ${(props) => props.theme.secondary};
			border-radius: 2px;
			margin-top: 15px;
			margin-bottom: 5px;
			margin-left: auto;
			margin-right: auto;
			text-align: center;

			&:disabled {
				filter: opacity(0.5);
			}
		}

		@media screen and (max-width: 1024px) {
			align-self: end;
		}
		@media screen and (max-width: 768px) {
			font-size: 1.5rem;
		}
	}
`;

export const StyledCart = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 20px;
`;

export const StyledCartItem = styled.div`
	display: grid;
	grid-template-columns: auto 1fr 100px 200px 50px;
	grid-template-rows: 150px;
	align-items: center;
	font-size: 1.2rem;
	border: 1px solid lightgrey;
	border-radius: 2px;
	overflow: hidden;

	img {
		height: 100%;
		width: auto;
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
		& > * {
			font-size: 1.5rem;
		}
	}

	.prod_trash {
		text-align: center;
	}

	.prod_name {
		text-align: center;
		font-size: 1.5rem;
	}
	.prod_buttons {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.prod_price {
		text-align: center;
	}

	@media screen and (max-width: 1024px) {
		grid-template-areas:
			"image title title title"
			"image quantity price trash";
		grid-template-columns: 1fr 200px 1fr 50px;
		grid-template-rows: 75px 75px;

		img {
			grid-area: image;
		}
		.prod_name {
			grid-area: title;
		}
		.prod_buttons {
			grid-area: quantity;
		}
		.prod_price {
			grid-area: price;
		}
		.prod_trash {
			grid-area: trash;
		}
	}

	@media screen and (max-width: 768px) {
		grid-template-areas:
			"image title title title"
			"image quantity price trash";
		grid-template-columns: auto 1fr 1fr 50px;
		grid-template-rows: 50px 50px;
		font-size: 0.8rem;

		img {
			grid-area: image;
		}
		button {
			& > * {
				font-size: 1rem;
			}
		}

		.prod_name {
			font-size: 1.3rem;
			grid-area: title;
		}
		.prod_buttons {
			grid-area: quantity;
		}
		.prod_price {
			grid-area: price;
		}
		.prod_trash {
			grid-area: trash;
		}
	}
`;
