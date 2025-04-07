import { createContext } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const fromPage = "/"; // Страница после авторизации

  const signin = (isLogin) => {
    localStorage.setItem("isLogin", isLogin);
    navigate(fromPage, { replace: true });
  };

  const signout = () => {
    localStorage.clear();
    navigate("/auth", { replace: true });
  };

  const value = { signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
