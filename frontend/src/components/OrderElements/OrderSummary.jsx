import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { payFail, payRequest, paySuccess } from "../../redux/slices/orderSlice";
import PaypalButtons from "./PaypalButtons";

function OrderSummary({
	subTotalPrice,
	shippingPrice,
	ivaPrice,
	totalPrice,
	placeOrderHandler,
	isPaid,
	isPending,
	order_id,
	token,
}) {
	const { pathname } = useLocation();
	const dispatch = useDispatch();

	const createOrder = (data, actions) => {
		return actions.order
			.create({
				purchase_units: [
					{
						amount: { value: totalPrice },
					},
				],
			})
			.then((orderId) => {
				return orderId;
			});
	};

	const onApprove = (data, actions) => {
		return actions.order.capture().then(async (details) => {
			try {
				dispatch(payRequest());
				const { data } = await axios.put(
					`/api/orders/${order_id}/pay`,
					details,
					{
						headers: {
							authorization: `Bearer ${token}`,
						},
					}
				);
				dispatch(paySuccess(data));
				console.log("order is paid");
			} catch (error) {
				dispatch(payFail());
				console.log(getError(error));
			}
		});
	};

	const onError = (error) => {
		console.log(error);
	};

	return (
		<>
			{subTotalPrice ? (
				<>
					<h3>Order Sumary</h3>
					<div>
						<p>Subtotal</p>
						<p>$ {subTotalPrice}</p>
					</div>
					<div>
						<p>Shipping</p>
						<p>$ {shippingPrice}</p>
					</div>
					<div>
						<p>Iva</p>
						<p>$ {ivaPrice}</p>
					</div>

					<strong>
						<p>Total</p>
						<p>$ {totalPrice}</p>
					</strong>
					{pathname === "/placeorder" ? (
						<button
							className="order-total"
							onClick={placeOrderHandler}
							disabled={subTotalPrice === 0}
						>
							Place Order
						</button>
					) : !isPaid ? (
						<PaypalButtons
							isPending={isPending}
							createOrder={createOrder}
							onApprove={onApprove}
							onError={onError}
						/>
					) : null}
				</>
			) : null}
		</>
	);
}

export default OrderSummary;
