import React from "react";
import { Link, useLocation } from "react-router-dom";

function PaymentCard({ paymentMethod, isPaid }) {
	const { pathname } = useLocation();
	return (
		<>
			{paymentMethod ? (
				<>
					<h3>Payment</h3>
					<p>
						<strong>Method:</strong> {paymentMethod}
					</p>
					{pathname === "/placeorder" ? <Link to="/payment">Edit</Link> : null}
					{isPaid ? "pago" : "sin pagar"}
				</>
			) : null}
		</>
	);
}

export default PaymentCard;
