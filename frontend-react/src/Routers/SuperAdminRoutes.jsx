import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdmin from "../SuperAdmin/SuperAdmin";
import SuperAdminDashboard from "../SuperAdmin/SuperAdminDashboard";
import NotFound from "../customers/pages/NotFound/NotFound";

import { useSelector } from "react-redux";
import SuperAdminSideBar from "../SuperAdmin/SuperAdminSideBar";

const SuperAdminRoutes = () => {
  const { auth } = useSelector((store) => store);

  if (auth.user?.role !== "ROLE_SUPER_ADMIN") {
    return <NotFound />;
  }

  return (
    <div className="lg:flex justify-between">
      <SuperAdminSideBar />
      <div className="w-[80vw]">
        <Routes>
          <Route
            path="/super-admin/dashboard"
            element={<SuperAdminDashboard />}
          />{" "}
          {/* Ajoutez cette route */}
          {/* Autres routes du superAdmin */}
        </Routes>
      </div>
    </div>
  );
};

export default SuperAdminRoutes;
