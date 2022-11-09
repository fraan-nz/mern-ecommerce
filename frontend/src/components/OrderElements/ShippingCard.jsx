import React from "react";
import { Link, useLocation } from "react-router-dom";

function ShippingCard({
	fullName,
	address,
	city,
	postalCode,
	country,
	isDelivered,
}) {
	const { pathname } = useLocation();

	return (
		<>
			{fullName ? (
				<>
					<h3>Shipping</h3>
					<p>
						<strong>Name:</strong> {fullName} <br />
						<strong>Address: </strong> {address}, {city}, {postalCode},{" "}
						{country}
					</p>
					{pathname === "/placeorder" ? (
						<Link to="/shipping">Edit</Link>
					) : isDelivered ? (
						<p className="status green">Delivered</p>
					) : (
						<p className="status red">Not Delivered</p>
					)}
				</>
			) : null}
		</>
	);
}

export default ShippingCard;
