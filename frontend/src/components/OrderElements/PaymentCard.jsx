import React from "react";
import { Link, useLocation } from "react-router-dom";

function PaymentCard({ paymentMethod }) {
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
				</>
			) : null}
		</>
	);
}

export default PaymentCard;
