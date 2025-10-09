import React from "react";
import { Navigate } from "react-router-dom";

// ✅ Define useAuth hook
export const useAuth = () => {
  const user = localStorage.getItem("auth") === "true";
  return { user };
};

// ✅ ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
