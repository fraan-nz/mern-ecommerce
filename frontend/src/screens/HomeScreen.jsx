import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/fetchDataSlice";
import Product from "../components/Product/Product";
import { StyledGridProducts } from "../components/Product/StyledProduct";
import { Helmet } from "react-helmet-async";

function HomeScreen() {
	const dispatch = useDispatch();
	const { products, loading } = useSelector((state) => state.fetchData);

	useEffect(() => {
		dispatch(fetchData("/api/products"));
	}, []);

	return (
		<>
			<Helmet>
				<title>E-commerce</title>
			</Helmet>
			<h1>Products</h1>
			<StyledGridProducts>
				{loading ? (
					<p>Loading...</p>
				) : (
					products.map((product) => (
						<Product product={product} key={product.slug} />
					))
				)}
			</StyledGridProducts>
		</>
	);
}

export default HomeScreen;
