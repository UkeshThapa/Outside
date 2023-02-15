import React from "react";
import "./SideBarMenu.scss";


const SideBarMenu = ({ item, icon }) => {
  console.log(icon);
  return (
    <div className="sidebar-menu">
      <div className="menu-icon">
        
        <i className={icon}></i>
      </div>
      <div className="menu-items">{item}</div>
    </div>
  );
};

export default SideBarMenu;
