import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchHistory } from "../redux/slices/orderHistorySlice";

function OrderHistoryScreen() {
	const { userInfo } = useSelector((state) => state.user);
	const { loading, error, ordersHistory } = useSelector(
		(state) => state.orderHistory
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHistory(userInfo.token));
	}, [userInfo]);

	return (
		<>
			<h1>Order History</h1>
			{loading ? (
				"Loading"
			) : error ? (
				"Error"
			) : (
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>DATE</th>
							<th>TOTAL</th>
							<th>PAID</th>
							<th>DELIVERED</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{ordersHistory.map((order) => (
							<tr key={order._id}>
								<td>{order._id}</td>
								<td>{order.createdAt.substring(0, 10)}</td>
								<td>{order.totalPrice.toFixed(2)}</td>
								<td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
								<td>
									{order.isDelivered
										? order.deliveredAt.substring(0, 10)
										: "No"}
								</td>
								<td>
									<button
										onClick={() => {
											navigate(`/order/${order._id}`);
										}}
									>
										Details
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
}

export default OrderHistoryScreen;
