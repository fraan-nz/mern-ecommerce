import React, { useState } from "react";
import { StyledSignIn } from "../styles/StyledSignIn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser } from "../redux/slices/userSlice";
import { useEffect } from "react";

function SignUpScreen() {
	const { userInfo } = useSelector((state) => state.user);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { search } = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const redirectInUrl = new URLSearchParams(search).get("redirect");
	const redirect = redirectInUrl ? redirectInUrl : "/";

	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
		}
		dispatch(signUpUser({ name, email, password }));
	};

	useEffect(() => {
		if (userInfo) {
			navigate(redirect || "/");
		}
	}, [userInfo]);

	return (
		<StyledSignIn>
			<h1>Sign Up</h1>
			<form onSubmit={submitHandler}>
				<label>
					Name
					<input
						type="text"
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
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
				<label>
					Confirm Password
					<input
						type="password"
						required
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</label>
				<button>Sign Up</button>
			</form>
			<p>
				Already have an account?{" "}
				<Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
			</p>
		</StyledSignIn>
	);
}

export default SignUpScreen;
