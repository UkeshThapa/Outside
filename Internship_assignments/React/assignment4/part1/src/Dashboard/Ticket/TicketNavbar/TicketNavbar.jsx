import React, { useState } from "react";
import "./TicketNavbar.scss";
import profileImage from "../../../assets/profile_pic.png";

const TicketNavbar = ({ onQueryChange, query,searchValue }) => {
  const [showInput, setShowInput] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  const handleNotificationDropDown = () => {
    setShowDropdown(!showDropdown);
  };

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

        {showDropdown && (
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
          <div className="profile-image-wrapper">
            <div className="profile-image">
              <img src={profileImage} alt="profile image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketNavbar;
