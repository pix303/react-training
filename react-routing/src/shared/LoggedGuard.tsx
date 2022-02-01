import React from "react";

const LoggedGuard: React.FC = ({ children }) => {
  return !!localStorage.getItem("isLogged") ? <>{children}</> : null;
};

export default LoggedGuard;
