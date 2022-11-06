import React from "react";

function OrderSummary(props) {
	const {
		subTotalPrice,
		shippingPrice,
		ivaPrice,
		totalPrice,
		placeOrderHandler,
	} = props;
	return (
		<>
			<h3>Order Sumary</h3>
			<div>
				<p>Subtotal</p>
				<p>$ {subTotalPrice}</p>
			</div>
			<div>
				<p>Shipping</p>
				<p>$ {shippingPrice}</p>
			</div>
			<div>
				<p>Iva</p>
				<p>$ {ivaPrice}</p>
			</div>

			<strong>
				<p>Total</p>
				<p>$ {totalPrice}</p>
			</strong>
			<button className="order-total" onClick={placeOrderHandler}>
				Place Order
			</button>
		</>
	);
}

export default OrderSummary;
