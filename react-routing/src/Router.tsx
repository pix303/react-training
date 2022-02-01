import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Admin from "./feature/admin/Admin";
import Detail from "./feature/catalog/Detail";
import { DetailImage } from "./feature/catalog/detail-sub/DetailImage";
import DetailInfo from "./feature/catalog/detail-sub/DetailInfo";
import { DetailTitle } from "./feature/catalog/detail-sub/DetailTitle";
import Home from "./feature/Home";
import { Authed } from "./shared/Authed";
import PageNotFound from "./shared/PageNotFound";

const Catalog = lazy(() => import("./feature/catalog/Catalog"));

const Router: React.FC = () => {
  return useRoutes([
    { path: "home", element: <Home /> },
    { path: "catalog", element: <Catalog /> },
    {
      path: "catalog/:id",
      element: <Detail />,
      children: [
        { index: true, element: <DetailInfo /> },
        { path: "image", element: <DetailImage /> },
        { path: "description", element: <DetailTitle /> },
      ],
    },
    {
      path: "admin",
      element: <Authed redirectTo="/home" element={<Admin />} />,
    },
    { path: "/", element: <Navigate to="home" /> },
    { path: "*", element: <PageNotFound /> },
  ]);
};

export default Router;
