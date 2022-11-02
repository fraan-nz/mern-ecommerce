import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";
import { useEffect } from "react";
import { savePaymentMethod } from "../redux/slices/userSlice";

function PaymentScreen() {
	const { shippingAddress, paymentMethod } = useSelector((state) => state.user);
	const [paymentMethodName, setPaymentMethod] = useState(
		paymentMethod || "PayPal"
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!shippingAddress.address) {
			navigate("/shipping");
		}
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethodName));
		navigate("/placeorder");
	};

	return (
		<div>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<form onSubmit={submitHandler}>
				<label>
					<input
						type="radio"
						id="PayPal"
						value="PayPal"
						checked={paymentMethodName === "PayPal"}
						onChange={(e) => setPaymentMethod(e.target.value)}
					/>
					PayPal
				</label>

				<label>
					<input
						type="radio"
						id="Stripe"
						value="Stripe"
						checked={paymentMethodName === "Stripe"}
						onChange={(e) => setPaymentMethod(e.target.value)}
					/>
					Stripe
				</label>
				<button>Continue</button>
			</form>
		</div>
	);
}

export default PaymentScreen;
