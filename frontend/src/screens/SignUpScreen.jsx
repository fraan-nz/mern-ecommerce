import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser } from "../redux/slices/userSlice";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader/Loader";
import Form from "../components/Form/Form";

function SignUpScreen() {
	const { userInfo, loading } = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = async (data) => {
		const { name, email, password } = data;
		dispatch(signUpUser({ name, email, password }));
	};

	useEffect(() => {
		if (userInfo) {
			navigate("/");
		}
	}, [userInfo]);

	return (
		<>
			<Helmet>
				<title>Sign Up</title>
			</Helmet>
			{loading ? (
				<Loader />
			) : (
				<>
					<h1>Sign Up</h1>
					<Form submitHandler={submitHandler} />
				</>
			)}
		</>
	);
}

export default SignUpScreen;
