import { Navigate } from "react-router-dom";

export function PrivateRoute({ Component, redirectPath }) {
  const isLoggedIn = true;
  return isLoggedIn ? Component : <Navigate to={redirectPath} />;
}
