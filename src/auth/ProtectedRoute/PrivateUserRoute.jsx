import React from "react";
import useAuth from "../useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateUserRoute = () => {
	const { isLoggedIn, isLoading, currentUserType } = useAuth();
	if (isLoading) return <p>Loading...</p>;
	if (!isLoggedIn || currentUserType !== "user")
		return <Navigate to="/login" />;
	else return <Outlet />;
};

export default PrivateUserRoute;
