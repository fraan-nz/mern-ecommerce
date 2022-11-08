import React from "react";
import { Link, useLocation } from "react-router-dom";

function OrderItems({ prodsInCart }) {
	const { pathname } = useLocation();
	return (
		<>
			{prodsInCart ? (
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
					{pathname === "/placeorder" ? <Link to="/cart">Edit</Link> : null}
				</>
			) : null}
		</>
	);
}

export default OrderItems;
