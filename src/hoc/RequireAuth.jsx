import { Navigate } from "react-router";

function RequireAuth({ children }) {
  let isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    return <Navigate to="/auth" />;
  }

  return children;
}

export { RequireAuth };
