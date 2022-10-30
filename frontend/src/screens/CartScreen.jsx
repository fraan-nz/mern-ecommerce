import React from "react";
import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";
import {
	StyledCart,
	StyledCartSection,
} from "../components/Cart/StyledCartItem";
import { Helmet } from "react-helmet-async";
import { totalAmount, totalQuantity } from "../utils/quantityReducer";

function CartScreen() {
	const { prodsInCart } = useSelector((state) => state.cart);

	return (
		<>
			<Helmet>
				<title>E-commerce</title>
			</Helmet>
			<h1>Products in Cart</h1>
			<StyledCartSection>
				<StyledCart>
					{prodsInCart.map((prod) => {
						return <CartItem {...prod} key={prod.slug} />;
					})}
				</StyledCart>
				<div className="subtotal">
					Subtotal ({totalQuantity(prodsInCart)}) items : <br /> ${" "}
					{totalAmount(prodsInCart)}
					<button className="checkout" disabled={prodsInCart.length === 0}>
						Proceed to Checkout
					</button>
				</div>
			</StyledCartSection>
		</>
	);
}

export default CartScreen;
