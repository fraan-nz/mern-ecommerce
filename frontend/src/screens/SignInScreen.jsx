import React from "react";
import { StyledSignIn } from "../styles/StyledSignIn";
import { Link, useLocation } from "react-router-dom";

function SignInScreen() {
	const { search } = useLocation();
	const redirectInUrl = new URLSearchParams(search).get("redirect");
	const redirect = redirectInUrl ? redirectInUrl : "/";

	return (
		<StyledSignIn>
			<h1>Sign In</h1>
			<form>
				<label>
					Email
					<input type="email" required />
				</label>
				<label>
					Password
					<input type="password" required />
				</label>
				<button>Sign In</button>
			</form>
			<p>
				New customer?{" "}
				<Link to={`/signup?redirect=${redirect}`}>Create you account</Link>
			</p>
		</StyledSignIn>
	);
}

export default SignInScreen;
