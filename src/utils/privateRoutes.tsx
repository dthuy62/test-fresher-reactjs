import React from "react";
import { Outlet, Navigate } from 'react-router-dom';
import { RouteList } from "../constants/routes";

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  return isAuthenticated ? <Outlet /> : <Navigate to={RouteList.login} />
};

export default PrivateRoutes;
