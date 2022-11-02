import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../redux/slices/userSlice";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";

function ShippingAdressScreen() {
	const { shippingAddress, userInfo } = useSelector((store) => store.user);
	const navigate = useNavigate();

	const addressInfo = shippingAddress || "";

	const [fullName, setFullName] = useState(addressInfo.fullName || "");
	const [address, setAddress] = useState(addressInfo.adress || "");
	const [city, setCity] = useState(addressInfo.city || "");
	const [postalCode, setPostalCode] = useState(addressInfo.postalCode || "");
	const [country, setCountry] = useState(addressInfo.country || "");

	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			saveShippingAddress({ fullName, address, city, postalCode, country })
		);
		navigate("/payment");
	};

	useEffect(() => {
		if (!userInfo) {
			navigate("/signin");
		}
	}, [userInfo, navigate]);

	return (
		<>
			<CheckoutSteps step1 step2 />
			<h1>Shipping Address</h1>{" "}
			<form onSubmit={submitHandler}>
				<label>
					Full Name
					<input
						type="text"
						value={fullName}
						onChange={(e) => {
							setFullName(e.target.value);
						}}
						required
					/>
				</label>

				<label>
					Address
					<input
						type="text"
						value={address}
						onChange={(e) => {
							setAddress(e.target.value);
						}}
						required
					/>
				</label>

				<label>
					City
					<input
						type="text"
						value={city}
						onChange={(e) => {
							setCity(e.target.value);
						}}
						required
					/>
				</label>

				<label>
					Postal Code
					<input
						type="text"
						value={postalCode}
						onChange={(e) => {
							setPostalCode(e.target.value);
						}}
						required
					/>
				</label>

				<label>
					Country
					<input
						type="text"
						value={country}
						onChange={(e) => {
							setCountry(e.target.value);
						}}
						required
					/>
				</label>

				<button>Continue</button>
			</form>
		</>
	);
}

export default ShippingAdressScreen;
