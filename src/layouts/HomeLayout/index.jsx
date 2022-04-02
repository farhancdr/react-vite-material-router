import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<>
			<p>I am in home layout</p>
			<Outlet />
		</>
	);
};

export default HomeLayout;
