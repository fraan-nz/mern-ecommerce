import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { StyledProduct, StyledStars } from "./StyledProduct";

function Product(props) {
	const { product } = props;

	const dispatch = useDispatch();

	return (
		<StyledProduct>
			<Link to={`/products/${product.slug}`}>
				<img src={product.image} alt={product.name} />
			</Link>
			<div className="container">
				<Link to={`/products/${product.slug}`} className="title">
					<p>{product.name}</p>
				</Link>
				<StyledStars rating={product.rating}>
					{" "}
					<span>{product.numReviews} Reviews</span>
				</StyledStars>
				<span className="price">$ {product.price}</span>
				<button
					className="button"
					onClick={() => dispatch(addToCart(product))}
					disabled={product.countInStock < 1}
				>
					{product.countInStock < 1 ? "Out of stock" : "Add to cart"}
				</button>
			</div>
		</StyledProduct>
	);
}

export default Product;
