import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = ({ authType }) => {
	return (
		<>
			<p>I am in user Layout </p>
			<Outlet />
		</>
	);
};

export default UserLayout;
