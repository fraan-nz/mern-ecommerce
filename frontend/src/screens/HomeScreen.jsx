import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

function HomeScreen() {
	return (
		<div>
			<h1>list products</h1>
			<div className="products">
				{data.products.map((product) => (
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
