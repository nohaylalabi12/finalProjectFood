import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import AdminRouters from "./AdminRouters";
import { useSelector } from "react-redux";
import NotFound from "../customers/pages/NotFound/NotFound";
import SuperAdminRoutes from "./SuperAdminRoutes";

const Routers = () => {
  const { auth } = useSelector((store) => store);

  return (
    <Routes>
      {auth.user?.role === "ROLE_SUPER_ADMIN" && (
        <Route path="/super-admin/*" element={<SuperAdminRoutes />} />
      )}
      {auth.user?.role === "ROLE_RESTAURANT_OWNER" && (
        <Route path="/admin/restaurant/*" element={<AdminRouters />} />
      )}
      <Route path="/*" element={<CustomerRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
