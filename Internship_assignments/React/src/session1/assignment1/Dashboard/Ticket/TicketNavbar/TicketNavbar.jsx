import React, { useState } from "react";
import "./TicketNavbar.scss";
import profileImage from '../../../../../assets/profile_pic.png';


const TicketNavbar = ({onQueryChange,query}) => {
  const[showInput,setShowInput] = useState(false)

  const handleClick = () => {
    setShowInput(!showInput);
  }

  return (
    <div className="ticket-navbar">
      <div className="ticket-navbar-header">
        <h1>Ticket</h1>
      </div>
      <div className="profile">

        <div id="nav-search">
          <div id="search-input">
            {showInput &&
              <input type="search" value={query} onChange={onQueryChange}/>
            }
          </div>
          <button id="search">
            <i className="icon-search" onClick={handleClick} ></i>
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
