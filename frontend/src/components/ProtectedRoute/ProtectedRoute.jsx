import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
	const { userInfo } = useSelector((state) => state.user);
	console.log(userInfo);
	if (!userInfo) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
