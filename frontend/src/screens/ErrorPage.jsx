import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div>
			<h3>Failed to load</h3>
			<Link to="/">Go to Home</Link>
		</div>
	);
}

export default ErrorPage;
