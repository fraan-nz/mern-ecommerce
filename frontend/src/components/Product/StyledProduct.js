import styled from "styled-components";

export const StyledGridProducts = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(110px, 275px));
	justify-content: center;
	gap: 10px;
`;

export const StyledProduct = styled.div`
	width: 100%;
	border: 1px solid ${(props) => props.theme.secondary};
	border-radius: 2px;
	overflow: hidden;

	& img {
		width: auto;
		max-height: 273px;
		margin-left: auto;
		margin-right: auto;
		display: block;
	}

	& .container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding-bottom: 10px;
	}

	& .title {
		width: 100%;
		text-decoration: none;
		text-align: center;
		font-weight: 400;
		font-size: 1.2rem;
		background-color: ${(props) => props.theme.secondary};
		color: ${(props) => props.theme.white};
	}

	& .price {
		font-weight: 400;
		font-size: 1.2rem;
	}

	& .button {
		font-weight: 400;
		font-size: 0.8rem;
		padding: 4px 10px;
		cursor: pointer;
		background-color: ${(props) => props.theme.accent};
		color: ${(props) => props.theme.secondary};
		border: 1px solid ${(props) => props.theme.secondary};
		border-radius: 2px;
		margin-top: 5px;
		&:disabled {
			filter: opacity(0.5);
		}
	}
`;

export const StyledStars = styled.div`
	display: inline-block;
	font-size: 1.2rem;
	line-height: 0.5;
	margin-block: 6px;

	& span {
		color: ${(props) => props.theme.accent};
		font-size: 1rem;
	}

	&::before {
		content: "★★★★★";
		letter-spacing: 0px;
		background: ${({ theme, rating }) => {
			return `
      linear-gradient(90deg, ${theme.accent} calc(${rating / 5} * 100%), ${
				theme.primary
			} calc(${rating / 5} * 100%))`;
		}};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	@media screen and (max-width: 1150px) {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}
`;

export const StyledProdContainer = styled.div`
	display: grid;
	grid-template-columns: max-content max-content max-content;
	justify-content: center;
	margin-top: 10%;

	& img {
		width: 100%;
		max-width: 500px;
		place-self: center;
		margin-right: 60px;
	}

	& .prod__desc {
		display: flex;
		flex-direction: column;
		h2 {
			font-size: 2rem;
			padding-bottom: 10px;
		}
		div {
			padding-bottom: 10px;
			padding-top: 14px;
			border-top: 1px solid lightgray;
		}
		p {
			padding-block: 10px;
			font-size: 1.5rem;
			border-top: 1px solid lightgray;

			&:last-child {
				font-size: 1.2rem;
			}
		}
	}

	& .prod__stock {
		height: max-content;
		padding: 10px;
		border: 1px solid lightgray;
		margin-left: 50px;
		font-size: 1.2rem;
		text-align: center;

		.in-stock,
		.unavailable {
			padding: 5px;
			border-radius: 5px;
			font-size: 1rem;
			color: ${(props) => props.theme.white};
		}
		.in-stock {
			background-color: green;
		}
		.unavailable {
			background-color: red;
		}

		.button {
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
	}

	@media screen and (max-width: 1200px) {
		grid-template-rows: 200px auto;
		grid-template-columns: auto max-content;
		grid-template-areas:
			"image desc"
			"image stock";

		& img {
			grid-area: image;
		}

		& .prod__desc {
			grid-area: desc;
		}

		& .prod__stock {
			grid-area: stock;
			margin: 0;
		}
	}

	@media screen and (max-width: 488px) {
		grid-template-rows: auto 150px;
		grid-template-columns: auto auto;
		grid-template-areas:
			"image image"
			"desc stock";

		& img {
			max-width: 150px;
		}
		& .prod__desc {
			align-self: center;
			h2 {
				font-size: 1.2rem;
				padding-bottom: 2px;
			}
			div {
				padding-bottom: 2px;
				padding-top: 6px;
				border: none;
				span {
					display: none;
				}
			}
			p {
				padding-block: 2px;
				font-size: 1rem;
				border: none;

				&:last-child {
					font-size: 1rem;
				}
			}
		}
		& .prod__stock {
			grid-area: stock;
			margin: 0;
			align-self: center;
			border: none;
			font-size: 1rem;
			padding-right: 0;
			.button {
				font-size: 0.8rem;
			}
		}
	}
`;

export const StyledPaginate = styled.div`
	width: 100%;
	padding-block: 40px;
	display: flex;
	justify-content: center;
	gap: 20px;

	button {
		background: none;
		border: none;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 50%;
		border-color: lightgrey;
		background-color: lightgray;
		height: 30px;
		width: 30px;
		line-height: 0;
		cursor: pointer;

		&.active {
			background-color: ${(props) => props.theme.accent};
		}
	}
`;
