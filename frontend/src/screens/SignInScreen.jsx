import React, { useState } from "react";
import { StyledSignIn } from "../styles/StyledSignIn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/userSlice";
import { useEffect } from "react";

function SignInScreen() {
	const { userInfo } = useSelector((state) => state.user);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { search } = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const redirectInUrl = new URLSearchParams(search).get("redirect");
	const redirect = redirectInUrl ? redirectInUrl : "/";

	const submitHandler = async (e) => {
		e.preventDefault();
		dispatch(loginUser({ email, password }));
	};

	useEffect(() => {
		if (userInfo) {
			navigate(redirect || "/");
		}
	}, [userInfo]);

	return (
		<StyledSignIn>
			<h1>Sign In</h1>
			<form onSubmit={submitHandler}>
				<label>
					Email
					<input
						type="email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
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
