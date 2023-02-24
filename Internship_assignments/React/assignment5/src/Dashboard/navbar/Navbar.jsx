import React, { useState,useContext } from "react";
import "./Navbar.scss";
import profileImage from "../../assets/profile_pic.png";
import {FaUser,FaSignOutAlt,FaQuestionCircle} from "react-icons/fa";
import { NavLink,useParams,useLocation } from "react-router-dom";
import { searchContext } from "../../App";

const Navbar = () => {
  const {name} = useParams()
  const [showInput, setShowInput] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    setShowNotificationDropdown(false);
    setShowProfileDropdown(false);
    setShowInput(!showInput);
  };


  const handleNotificationDropDown = () => {
    setShowInput(false)
    setShowProfileDropdown(false)
    setShowNotificationDropdown(!showNotificationDropdown);
  };


  const handleProfileDropDown = () =>{
    setShowNotificationDropdown(false)
    setShowProfileDropdown(!showProfileDropdown)

  }


  const [searchKey,setSearchKey] = useContext(searchContext)


  const onQueryChange = (e) =>{
    setSearchKey(e.target.value)
  }


  return (
    <div className="navbar">
      <div className="navbar-header">
        <h1>{location.pathname.slice(11)}</h1>
      </div>
      <div className="profile">
        <div id="nav-search">
          {showInput && (
            <input
              value={searchKey}
              type="search"
              onChange={onQueryChange}
              placeholder="search"
              id="search-input"
            />
          )}
          <button type="button" id="search">
            <i className="icon-search" onClick={handleClick}></i>
          </button>
        </div>

        <button id="notification" onClick={handleNotificationDropDown}>
          <i className="icon-notification"></i>
        </button>

        {showNotificationDropdown && (
          <div className="notification-dropdown">
            <h3>Notification</h3>
            <ul>
              <li>notification1</li>
              <li>notification2</li>
            </ul>
          </div>
        )}



        <div className="profile-section">
          <h3>Jones Ferdinand</h3>
          <div className="profile-image-wrapper" onClick={handleProfileDropDown}>
            <div className="profile-image">
              <img src={profileImage} alt="profile image" />
            </div>
          </div>
        </div>

        {showProfileDropdown && (
          <div className="profile-dropdown">
            <div className="profile-logo">
              <FaUser/>
              <h3>Profile</h3>
            </div>
            <div className="help-section">
              <FaQuestionCircle/>
              <h3>Help Center</h3>
            </div>
            <div >
              <NavLink to={'/'} className="logout-section">
                <FaSignOutAlt/>
                <h3>Log out</h3>
              </NavLink>
            </div>
          </div>
        ) }
      </div>
    </div>
  );
};

export default Navbar;
