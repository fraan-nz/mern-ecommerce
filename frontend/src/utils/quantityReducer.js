export const totalQuantity = (cartArray) => {
	return cartArray.reduce((accu, value) => {
		return value.quantity + accu;
	}, 0);
};
