import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";
import { StyledOrder } from "../styles/StyledPayment";

function PlaceOrderScreen() {
	const { shippingAddress, paymentMethod } = useSelector((state) => state.user);
	const { prodsInCart } = useSelector((state) => state.cart);
	return (
		<StyledOrder>
			<CheckoutSteps step1 step2 step3 step4 />
			<h1>Preview Order</h1>
			<div className="order-card">
				<h3>Shipping</h3>
				<p>
					<strong>Name:</strong> {shippingAddress.fullName} <br />
					<strong>Address: </strong> {shippingAddress.address},{" "}
					{shippingAddress.city}, {shippingAddress.postalCode},{" "}
					{shippingAddress.country}
				</p>
				<Link to="/shipping">Edit</Link>
			</div>
			<div className="order-card">
				<h3>Payment</h3>
				<p>
					<strong>Method:</strong> {paymentMethod}
				</p>
				<Link to="/payment">Edit</Link>
			</div>
			<div className="order-card">
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
			</div>
		</StyledOrder>
	);
}

export default PlaceOrderScreen;
