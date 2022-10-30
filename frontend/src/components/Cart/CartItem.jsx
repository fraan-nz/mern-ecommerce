import React from "react";
import { StyledCartItem } from "./StyledCartItem";
import { FaTrash, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

function CartItem(prod) {
	return (
		<StyledCartItem>
			<img src={prod.image} alt={prod.name} />
			<p className="prod_name">{prod.name}</p>
			<div className="prod_buttons">
				<button disabled={prod.quantity === 1}>
					<FaMinusCircle />
				</button>
				{prod.quantity}
				<button disabled={prod.quantity === prod.countInStock}>
					<FaPlusCircle />
				</button>
			</div>
			<p className="prod_price">$ {prod.price}</p>
			<button className="prod_trash">
				<FaTrash />
			</button>
		</StyledCartItem>
	);
}

export default CartItem;
