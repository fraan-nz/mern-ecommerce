import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInUser } from "../redux/slices/userSlice";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader/Loader";
import Form from "../components/Form/Form";

function SignInScreen() {
	const { userInfo, loading } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { search } = useLocation();

	const redirectInUrl = new URLSearchParams(search).get("redirect");
	const redirect = redirectInUrl ? redirectInUrl : "/";

	const submitHandler = async (data) => {
		const { email, password } = data;
		dispatch(signInUser({ email, password }));
	};

	useEffect(() => {
		if (userInfo) {
			navigate(redirect || "/");
		}
	}, [userInfo]);

	return (
		<>
			<Helmet>
				<title>Sign In</title>
			</Helmet>
			{loading ? (
				<Loader />
			) : (
				<>
					<h1>Sign In</h1>
					<Form submitHandler={submitHandler} redirect={redirect} />
				</>
			)}
		</>
	);
}

export default SignInScreen;
