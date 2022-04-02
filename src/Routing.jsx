import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import NotFound from "@/pages/NotFound";
import PrivateUserRoute from "@/auth/ProtectedRoute/PrivateUserRoute";
import PrivateAdminRoute from "@/auth/ProtectedRoute/PrivateAdminRoute";
import AdminLayout from "@/layouts/AdminLayout";
import UserLayout from "@/layouts/UserLayout";
import AdminHome from "@/pages/AdminHome";
import UserHome from "@/pages/UserHome";

export default function Routing() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Registration />} />
			<Route element={<PrivateUserRoute />}>
				<Route path="/user" element={<UserLayout />}>
					<Route path="/user/status" element={<UserHome />} />
				</Route>
			</Route>
			<Route element={<PrivateAdminRoute />}>
				<Route path="/admin" element={<AdminLayout />}>
					<Route path="/admin/status" element={<AdminHome />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
