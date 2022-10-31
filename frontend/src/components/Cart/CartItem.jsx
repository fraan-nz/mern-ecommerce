import React from "react";
import { StyledCartItem } from "./StyledCartItem";
import { FaTrash, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import {
	addToCart,
	deleteItem,
	removeCart,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function CartItem(prod) {
	const dispatch = useDispatch();
	return (
		<StyledCartItem>
			<img src={prod.image} alt={prod.name} />
			<p className="prod_name">{prod.name}</p>
			<div className="prod_buttons">
				<button
					disabled={prod.quantity === 1}
					onClick={() => dispatch(removeCart(prod))}
				>
					<FaMinusCircle />
				</button>
				{prod.quantity}
				<button
					disabled={prod.quantity === prod.countInStock}
					onClick={() => dispatch(addToCart(prod))}
				>
					<FaPlusCircle />
				</button>
			</div>
			<p className="prod_price">$ {prod.price}</p>
			<button className="prod_trash" onClick={() => dispatch(deleteItem(prod))}>
				<FaTrash />
			</button>
		</StyledCartItem>
	);
}

export default CartItem;
