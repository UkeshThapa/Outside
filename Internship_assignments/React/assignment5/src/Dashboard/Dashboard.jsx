import React, { useEffect } from "react";
import SideBarContainer from "./SideBar/SideBarContainer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

  const navigateToLogInPage = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("loggedState")){
      navigateToLogInPage("/login")
    }
  },[])



  return (
    <div className="dashboard-container">
      <SideBarContainer />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
