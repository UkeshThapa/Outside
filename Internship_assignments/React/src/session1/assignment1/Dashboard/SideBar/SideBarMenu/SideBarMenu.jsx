import React from "react";
import "./SideBarMenu.scss";

const SideBarMenu = ({ item, icon }) => {
  console.log(icon);
  return (
    <div className="sidebar-menu">
      <div className="menu-icon">{icon}</div>
      <div className="menu-items">{item}</div>
    </div>
  );
};

export default SideBarMenu;
