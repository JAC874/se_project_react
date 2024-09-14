import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedin, children }) {
  if (!isLoggedin) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
