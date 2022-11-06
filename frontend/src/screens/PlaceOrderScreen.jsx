import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";
import {
	createOrder,
	successfulOrder,
	rejectedOrder,
} from "../redux/slices/orderSlice";
import { StyledOrder } from "../styles/StyledPayment";
import { roundPrice } from "../utils/priceRound";
import { totalAmount } from "../utils/quantityReducer";
import axios from "axios";
import { deleteAllCart } from "../redux/slices/cartSlice";
import OrderSummary from "../components/OrderElements/OrderSummary";
import ShippingCard from "../components/OrderElements/ShippingCard";
import PaymentCard from "../components/OrderElements/PaymentCard";
import OrderItems from "../components/OrderElements/OrderItems";

function PlaceOrderScreen() {
	const { shippingAddress, paymentMethod, userInfo } = useSelector(
		(state) => state.user
	);
	const { prodsInCart } = useSelector((state) => state.cart);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const subTotalPrice = roundPrice(totalAmount(prodsInCart));
	const shippingPrice =
		totalAmount(prodsInCart) > 100 ? roundPrice(0) : roundPrice(10);
	const ivaPrice = roundPrice(totalAmount(prodsInCart) * 0.21);

	const totalPrice = roundPrice(
		Number(totalAmount(prodsInCart)) + Number(shippingPrice) + Number(ivaPrice)
	);

	useEffect(() => {
		if (!paymentMethod) {
			navigate("/payment");
		}
	}, [paymentMethod]);

	const placeOrderHandler = async () => {
		try {
			dispatch(createOrder());
			const { data } = await axios.post(
				"/api/orders",
				{
					orderItems: prodsInCart,
					shippingAddress: shippingAddress,
					paymentMethod: paymentMethod,
					subtotalPrice: subTotalPrice,
					shippingPrice: shippingPrice,
					ivaPrice: ivaPrice,
					totalPrice: totalPrice,
				},
				{
					headers: {
						authorization: `Bearer ${userInfo.token}`,
					},
				}
			);
			dispatch(successfulOrder());
			dispatch(deleteAllCart());
			navigate(`/orders/${data.order._id}`);
		} catch (error) {
			console.log(error);
			dispatch(rejectedOrder());
		}
	};

	return (
		<StyledOrder>
			<CheckoutSteps step1 step2 step3 step4 />
			<h1>Preview Order</h1>
			<div className="order">
				<div className="order-info">
					<div className="order-card">
						<ShippingCard shippingAddress={shippingAddress} />
					</div>
					<div className="order-card">
						<PaymentCard paymentMethod={paymentMethod} />
					</div>
					<div className="order-card">
						<OrderItems prodsInCart={prodsInCart} />
					</div>
				</div>
				<div className="order-total">
					<OrderSummary
						subTotalPrice={subTotalPrice}
						shippingPrice={shippingPrice}
						ivaPrice={ivaPrice}
						totalPrice={totalPrice}
						placeOrderHandler={placeOrderHandler}
					/>
				</div>
			</div>
		</StyledOrder>
	);
}

export default PlaceOrderScreen;
