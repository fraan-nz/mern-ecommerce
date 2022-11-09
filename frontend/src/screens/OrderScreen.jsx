import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import OrderItems from "../components/OrderElements/OrderItems";
import OrderSummary from "../components/OrderElements/OrderSummary";
import PaymentCard from "../components/OrderElements/PaymentCard";
import ShippingCard from "../components/OrderElements/ShippingCard";
import { fetchOrder, payReset } from "../redux/slices/orderSlice";
import { StyledOrder } from "../styles/StyledPayment";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader/Loader";
import ErrorPage from "./ErrorPage";

function OrderScreen() {
	const { userInfo } = useSelector((state) => state.user);
	const { loading, error, order, successPay } = useSelector(
		(state) => state.order
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const { id: orderId } = params;
	const { shippingAddress } = order;

	const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

	useEffect(() => {
		if (!userInfo) {
			return navigate("/login");
		}
		if (!order._id || successPay || (order._id && order._id !== orderId)) {
			dispatch(fetchOrder({ userInfo, orderId }));
			if (successPay) {
				dispatch(payReset());
			}
		} else {
			const loadPayPalScript = async () => {
				const { data: clientId } = await axios.get("/api/keys/paypal", {
					headers: { authorization: `Bearer ${userInfo.token}` },
				});
				paypalDispatch({
					type: "resetOptions",
					value: {
						"client-id": clientId,
						currency: "USD",
					},
				});
				paypalDispatch({ type: "setLoadingStatus", value: "pending" });
			};
			loadPayPalScript();
		}
	}, [userInfo, paypalDispatch, successPay]);

	return (
		<>
			<Helmet>
				<title>Order</title>
			</Helmet>
			{loading ? (
				<Loader />
			) : error ? (
				<ErrorPage />
			) : (
				<>
					<StyledOrder>
						<h1>Order {order._id}</h1>
						<div className="order">
							<div className="order-info">
								<div className="order-card">
									<ShippingCard
										{...shippingAddress}
										isDelivered={order.isDelivered}
									/>
								</div>
								<div className="order-card">
									<PaymentCard
										paymentMethod={order.paymentMethod}
										isPaid={order.isPaid}
									/>
								</div>
								<div className="order-card">
									<OrderItems prodsInCart={order.orderItems} />
								</div>
							</div>
							<div className="order-total">
								<OrderSummary
									subTotalPrice={order.subtotalPrice}
									shippingPrice={order.shippingPrice}
									ivaPrice={order.ivaPrice}
									totalPrice={order.totalPrice}
									placeOrderHandler={order.placeOrderHandler}
									isPaid={order.isPaid}
									isPending={isPending}
									order_id={order._id}
									token={userInfo.token}
								/>
							</div>
						</div>
					</StyledOrder>
				</>
			)}
		</>
	);
}

export default OrderScreen;
