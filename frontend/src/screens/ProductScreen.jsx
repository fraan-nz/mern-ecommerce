import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
	StyledProdContainer,
	StyledStars,
} from "../components/Product/StyledProduct";
import { Helmet } from "react-helmet-async";

function ProductScreen() {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const params = useParams();
	const { slug } = params;

	useEffect(() => {
		const fetchDataById = async (id) => {
			try {
				const result = await axios.get(`/api/product/${id}`);
				setProduct(result.data);
				setLoading(false);
			} catch (error) {
				setError(error.response.data.message);
				setLoading(false);
			}
		};
		fetchDataById(slug);
	}, []);

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<>
			<Helmet>
				<title>{product.name}</title>
			</Helmet>
			{loading ? (
				<p>Loading...</p>
			) : (
				<StyledProdContainer>
					<img src={product.image} alt={product.name} />
					<div className="prod__desc">
						<h2>{product.name}</h2>
						<StyledStars rating={product.rating}>
							{" "}
							<span>{product.numReviews} Reviews</span>
						</StyledStars>
						<p>$ {product.price}</p>
						<p>{product.description}</p>
					</div>
					<div className="prod__stock">
						<p>
							Stock:{" "}
							{product.countInStock > 0 ? (
								<span className="in-stock">In Stock</span>
							) : (
								<span className="unavailable">Unavailable</span>
							)}
						</p>
						<button className="button">Add to cart</button>
					</div>
				</StyledProdContainer>
			)}
		</>
	);
}

export default ProductScreen;
