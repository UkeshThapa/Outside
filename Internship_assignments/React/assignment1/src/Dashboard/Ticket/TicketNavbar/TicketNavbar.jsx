import React from "react";
import "./TicketNavbar.scss";
import profileImage from "../../../assets/profile_pic.png";

const TicketNavbar = () => {

  return (
    <div className="ticket-navbar">
      <div className="ticket-navbar-header">
        <h1>Ticket</h1>
      </div>
      <div className="profile">
        <div id="nav-search">
          <button id="search">
            <i className="icon-search"></i>
          </button>
        </div>

        <button id="notification">
          <i className="icon-notification"></i>
        </button>

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
