import React from "react";
import { Link } from "react-router-dom";

function OrderItems({ prodsInCart }) {
	return (
		<>
			<h3>Items</h3>
			{prodsInCart.map((item) => {
				return (
					<div className="order-items" key={item.slug}>
						<img src={item.image} alt={item.name} />
						<Link to={`/products/${item.slug}`}>{item.name}</Link>
						<span>
							<strong>Quantity:</strong> {item.quantity}
						</span>
						<span>
							<strong>Price:</strong> ${item.price} c/u
						</span>
					</div>
				);
			})}
			<Link to="/cart">Edit</Link>
		</>
	);
}

export default OrderItems;
