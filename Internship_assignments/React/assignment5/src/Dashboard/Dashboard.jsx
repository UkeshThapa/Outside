import React from "react";
import SideBarContainer from "./SideBar/SideBarContainer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBarContainer />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
