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
					{pathname === "/placeorder" ? (
						<Link to="/payment">Edit</Link>
					) : isPaid ? (
						<p className="status green">Paid</p>
					) : (
						<p className="status red">Not Paid</p>
					)}
				</>
			) : null}
		</>
	);
}

export default PaymentCard;
