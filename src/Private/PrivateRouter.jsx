import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Loader";
import { AuthContext } from "../Context/AuthProvider";


const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <Loader />;
	}

	if (user) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login "></Navigate>;
};

export default PrivateRoute;