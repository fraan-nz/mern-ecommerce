import React from "react";
import { Link, useLocation } from "react-router-dom";

function ShippingCard({ fullName, address, city, postalCode, country }) {
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
					{pathname === "/placeorder" ? <Link to="/shipping">Edit</Link> : null}
				</>
			) : null}
		</>
	);
}

export default ShippingCard;
