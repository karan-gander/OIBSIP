import { useAuth } from "./AuthContext";
import { Route, Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated   ,"lll")

  return <>{isAuthenticated?<Outlet />:<Navigate to="/login"/>}</>;
}
