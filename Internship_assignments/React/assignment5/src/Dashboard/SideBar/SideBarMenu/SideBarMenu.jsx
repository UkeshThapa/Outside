import React from "react";
import "./SideBarMenu.scss";
import { NavLink} from "react-router-dom";


const SideBarMenu = ({ item, icon,path }) => {



  return (
    <NavLink to={path} className="sidebar-menu">
      <div className="menu-icon">
        <i className={icon}></i>
      </div>
      <div className="menu-items">{item}</div>
    </NavLink>
  );
};

export default SideBarMenu;
