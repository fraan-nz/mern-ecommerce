import React from "react";
import { Link } from "react-router-dom";

function PaymentCard({ paymentMethod }) {
	return (
		<>
			<h3>Payment</h3>
			<p>
				<strong>Method:</strong> {paymentMethod}
			</p>
			<Link to="/payment">Edit</Link>
		</>
	);
}

export default PaymentCard;
