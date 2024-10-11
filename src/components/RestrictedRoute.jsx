import { Navigate } from "react-router-dom";

export function RestrictedRoute({ Component, redirectPath }) {
  const isLoggedIn = true;
  return isLoggedIn ? <Navigate to={redirectPath} /> : Component;
}
