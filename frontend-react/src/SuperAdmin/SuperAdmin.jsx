import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminSidebar from "./SuperAdminSideBar";
import SuperAdminDashboard from "./SuperAdminDashboard";
import SuperAdminRestaurants from "./SuperAdminRestaurants";
import SuperAdminCustomers from "./SuperAdminCustomers";

const SuperAdmin = () => {
  return (
    <div className="lg:flex justify-between">
      <SuperAdminSidebar />
      <div className="w-[80vw]">
        <Routes>
          <Route path="/dashboard" element={<SuperAdminDashboard />} />
          <Route path="/restaurants" element={<SuperAdminRestaurants />} />
          <Route path="/customers" element={<SuperAdminCustomers />} />
        </Routes>
      </div>
    </div>
  );
};

export default SuperAdmin;
