import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import OrderItems from "../components/OrderElements/OrderItems";
import OrderSummary from "../components/OrderElements/OrderSummary";
import PaymentCard from "../components/OrderElements/PaymentCard";
import ShippingCard from "../components/OrderElements/ShippingCard";
import { fetchOrder } from "../redux/slices/orderSlice";
import { StyledOrder } from "../styles/StyledPayment";

function OrderScreen() {
	const { userInfo } = useSelector((state) => state.user);
	const { loading, error, order } = useSelector((state) => state.order);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const { id: orderId } = params;

	useEffect(() => {
		dispatch(fetchOrder({ userInfo, orderId }));
		if (!userInfo) {
			return navigate("/login");
		}
		// if (!order._id || (order._id && order._id !== orderId)) {
		// }
	}, []);

	return loading ? (
		<p>Loading...</p>
	) : error ? (
		<p>Error...</p>
	) : (
		<StyledOrder>
			<h1>Order</h1>
			<div className="order">
				<div className="order-info">
					<div className="order-card">
						<ShippingCard shippingAddress={order.shippingAddress} />
					</div>
					<div className="order-card">
						<PaymentCard paymentMethod={order.paymentMethod} />
					</div>
					<div className="order-card">
						<OrderItems prodsInCart={order.orderItems} />
					</div>
				</div>
				<div className="order-total">
					<OrderSummary
						subTotalPrice={order.subTotalPrice}
						shippingPrice={order.shippingPrice}
						ivaPrice={order.ivaPrice}
						totalPrice={order.totalPrice}
						placeOrderHandler={order.placeOrderHandler}
					/>
				</div>
			</div>
		</StyledOrder>
	);
}

export default OrderScreen;
