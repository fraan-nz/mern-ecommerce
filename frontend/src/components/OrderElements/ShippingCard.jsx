import React from "react";
import { Link } from "react-router-dom";

function ShippingCard(props) {
	const { fullName, address, city, postalCode, country } =
		props.shippingAddress;
	return (
		<>
			<h3>Shipping</h3>
			<p>
				<strong>Name:</strong> {fullName} <br />
				<strong>Address: </strong> {address}, {city}, {postalCode}, {country}
			</p>
			<Link to="/shipping">Edit</Link>
		</>
	);
}

export default ShippingCard;
