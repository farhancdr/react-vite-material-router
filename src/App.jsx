import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateUserRoute from "./auth/ProtectedRoute/PrivateUserRoute";
import PrivateAdminRoute from "./auth/ProtectedRoute/PrivateAdminRoute";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Signin />} />
				<Route path="/register" element={<Signup />} />
				<Route element={<PrivateUserRoute />}>
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route element={<PrivateAdminRoute />}>
					<Route path="/admin" element={<Profile />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
