import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
	loadFetchData,
	successFetchData,
	errorFetchDataData,
} from "../redux/slices/fetchDataSlice";

function HomeScreen() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.fetchData);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get("/api/products");
				console.log(result);
				dispatch(loadFetchData(result.data));
			} catch (error) {
				dispatch(errorFetchDataData(error.message));
			}
			dispatch(successFetchData());
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>list products</h1>
			<div className="products">
				{products.map((product) => (
					<div key={product.slug} className="product">
						<Link to={`/product/${product.slug}`}>
							<img src={product.image} alt={product.name} />
						</Link>
						<Link to={`/product/${product.slug}`}>
							<p>{product.name}</p>
						</Link>
						<p>{product.price}</p>
						<button>Add to cart</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default HomeScreen;
