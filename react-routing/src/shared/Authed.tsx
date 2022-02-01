import React from "react";
import { Navigate } from "react-router-dom";

type AuthedProp = {
  element: React.ReactNode;
  redirectTo: string;
};
export const Authed: React.FC<AuthedProp> = ({ element, redirectTo }) => {
  return localStorage.getItem("isLogged") ? (
    <>{element}</>
  ) : (
    <Navigate to={redirectTo}></Navigate>
  );
};
