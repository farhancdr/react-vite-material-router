import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ authType }) => {
	return (
		<>
			<p>I am in admin Layout </p>
			<Outlet />
		</>
	);
};

export default AdminLayout;
