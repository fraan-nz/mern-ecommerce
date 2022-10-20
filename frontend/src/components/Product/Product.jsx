import React from "react";
import { Link } from "react-router-dom";
import { StyledProduct, StyledStars } from "./StyledProduct";

function Product(props) {
	const { product } = props;

	return (
		<StyledProduct>
			<Link to={`/product/${product.slug}`}>
				<img src={product.image} alt={product.name} />
			</Link>
			<div className="container">
				<Link to={`/product/${product.slug}`} className="title">
					<p>{product.name}</p>
				</Link>
				<StyledStars rating={product.rating}>
					{" "}
					<span>{product.numReviews} Reviews</span>
				</StyledStars>
				<span className="price">$ {product.price}</span>
				<button className="button">Add to cart</button>
			</div>
		</StyledProduct>
	);
}

export default Product;
