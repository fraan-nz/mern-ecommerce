import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

function PaypalButtons({ isPending, createOrder, onApprove, onError }) {
	return (
		<>
			{isPending ? (
				"Loading"
			) : (
				<PayPalButtons
					createOrder={createOrder}
					onApprove={onApprove}
					onError={onError}
				></PayPalButtons>
			)}
		</>
	);
}

export default PaypalButtons;
