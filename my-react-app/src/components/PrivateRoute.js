import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  console.log("Token exists:", !!token);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;