import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/slices/userSlice";

function ProfileScreen() {
	const { userInfo } = useSelector((state) => state.user);
	const [name, setName] = useState(userInfo.name);
	const [email, setEmail] = useState(userInfo.email);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { token } = userInfo;
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateUser({ name, email, password, token }));
	};

	return (
		<>
			<h1>Profile Screen</h1>
			<form onSubmit={submitHandler}>
				<label>
					Name
					<input
						type="text"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						required
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</label>
				<button>Update</button>
			</form>
		</>
	);
}

export default ProfileScreen;
