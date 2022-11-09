import React from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { updateUser } from "../redux/slices/userSlice";

import Form from "../components/Form/Form";

function ProfileScreen() {
	const { userInfo, loading } = useSelector((state) => state.user);
	const { token } = userInfo;
	const dispatch = useDispatch();

	const submitHandler = (data) => {
		const { name, email, password } = data;
		dispatch(updateUser({ name, email, password, token }));
	};

	return (
		<>
			<Helmet>
				<title>Profile</title>
			</Helmet>
			{loading ? (
				<Loader />
			) : (
				<>
					<h1>Profile Screen</h1>
					<Form submitHandler={submitHandler} />
				</>
			)}
		</>
	);
}

export default ProfileScreen;
