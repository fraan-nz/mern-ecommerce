import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
			console.log(data);
			navigate(`/order/${data.order._id}`);
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
						<h3>Shipping</h3>
						<p>
							<strong>Name:</strong> {shippingAddress.fullName} <br />
							<strong>Address: </strong> {shippingAddress.address},{" "}
							{shippingAddress.city}, {shippingAddress.postalCode},{" "}
							{shippingAddress.country}
						</p>
						<Link to="/shipping">Edit</Link>
					</div>
					<div className="order-card">
						<h3>Payment</h3>
						<p>
							<strong>Method:</strong> {paymentMethod}
						</p>
						<Link to="/payment">Edit</Link>
					</div>
					<div className="order-card">
						<h3>Items</h3>
						{prodsInCart.map((item) => {
							return (
								<div className="order-items" key={item.slug}>
									<img src={item.image} alt={item.name} />
									<Link to={`/products/${item.slug}`}>{item.name}</Link>
									<span>
										<strong>Quantity:</strong> {item.quantity}
									</span>
									<span>
										<strong>Price:</strong> ${item.price} c/u
									</span>
								</div>
							);
						})}
						<Link to="/cart">Edit</Link>
					</div>
				</div>
				<div className="order-total">
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
					<button className="order-total" onClick={placeOrderHandler}>
						Place Order
					</button>
				</div>
			</div>
		</StyledOrder>
	);
}

export default PlaceOrderScreen;
