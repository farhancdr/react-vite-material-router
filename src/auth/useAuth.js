import { useContext } from "react";
import UserContext from "./UserContext";

const useAuth = () => {
	const res = useContext(UserContext);
	console.log(res);
	return useContext(UserContext);
};

export default useAuth;
