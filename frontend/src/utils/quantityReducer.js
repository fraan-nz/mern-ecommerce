export const totalQuantity = (cartArray) => {
	return cartArray.reduce((accu, value) => {
		return value.quantity + accu;
	}, 0);
};

export const totalAmount = (cartArray) => {
	return cartArray.reduce((accu, value) => {
		return value.price * value.quantity + accu;
	}, 0);
};
