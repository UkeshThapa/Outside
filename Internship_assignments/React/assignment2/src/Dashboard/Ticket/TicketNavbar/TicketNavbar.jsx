import React, { useState } from "react";
import "./TicketNavbar.scss";
import profileImage from "../../../assets/profile_pic.png";
import {FaUser,FaSignOutAlt,FaQuestionCircle} from "react-icons/fa";

const TicketNavbar = ({ onQueryChange, query,searchValue }) => {
  const [showInput, setShowInput] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleClick = () => {
    setShowNotificationDropdown(false)
    setShowProfileDropdown(false)
    setShowInput(!showInput);
  };

  const handleNotificationDropDown = () => {
    setShowProfileDropdown(false)
    setShowInput(false)
    setShowNotificationDropdown(!showNotificationDropdown);
  };

  const handleProfileDropDown = () =>{
    setShowInput(false)
    setShowNotificationDropdown(false)
    setShowProfileDropdown(!showProfileDropdown)

  }



  return (
    <div className="ticket-navbar">
      <div className="ticket-navbar-header">
        <h1>Ticket</h1>
      </div>
      <div className="profile">
        <div id="nav-search">
          {showInput && (
            <input
              ref={searchValue}
              type="search"
              onChange={onQueryChange}
              placeholder="search"
              id="search-input"
            />
          )}
          <button id="search">
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
            <div className="logout-section">

                <FaSignOutAlt/>
                <h3>Log out</h3>
            </div>
          </div>
        ) }




      </div>
    </div>
  );
};

export default TicketNavbar;
