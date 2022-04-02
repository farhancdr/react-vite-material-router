import React from "react";
import useAuth from "../useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoute = () => {
	const { isLoggedIn, isLoading, currentUserType } = useAuth();
	if (isLoading) return <p>Loading...</p>;
	if (!isLoggedIn) return <Navigate to="/login" />;
	if (currentUserType !== "admin") return <Navigate to="/user" />;
	else return <Outlet />;
};

export default PrivateAdminRoute;
