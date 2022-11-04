import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils/token.js";

const orderRouter = express.Router();

orderRouter.post(
	"/",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const newOrder = new Order({
			orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
			shippingAddress: req.body.shippingAddress,
			paymentMethod: req.body.paymentMethod,
			subtotalPrice: req.body.subtotalPrice,
			shippingPrice: req.body.shippingPrice,
			ivaPrice: req.body.ivaPrice,
			totalPrice: req.body.totalPrice,
			user: req.user._id,
		});

		const order = await newOrder.save();
		res.status(201).send({ message: "New Order Created", order });
	})
);

export default orderRouter;
