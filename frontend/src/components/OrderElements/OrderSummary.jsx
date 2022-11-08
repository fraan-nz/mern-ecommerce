import React from "react";
import { useLocation } from "react-router-dom";

function OrderSummary({
	subTotalPrice,
	shippingPrice,
	ivaPrice,
	totalPrice,
	placeOrderHandler,
}) {
	const { pathname } = useLocation();
	return (
		<>
			{subTotalPrice ? (
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
					{pathname === "/placeorder" ? (
						<button
							className="order-total"
							onClick={placeOrderHandler}
							disabled={subTotalPrice === 0}
						>
							Place Order
						</button>
					) : null}
				</>
			) : null}
		</>
	);
}

export default OrderSummary;
