import React from 'react';
import "./Navbar.scss";
import logo from "../../../assets/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {useParams,useNavigate } from "react-router-dom";


const Navbar = () => {




  const navigateToLogInPage = useNavigate()
  function handleLogoutSession(){
    
    localStorage.removeItem("loggedState");


    sessionStorage.removeItem("user_id")
    navigateToLogInPage("/login")
  }


  return (
    <div className='navbar-container'>
        <div className='logo-section'>
            <figure className='logo'>
              <NavLink to="/session">
                <img src={logo} alt="navbarLogo" />
              </NavLink>
            </figure>
            
        </div>

        <div className="navbar-left-section">
          <div className='story-title'>
            {/* TITLE ON CLICK */}
            {/* <h1>TITLE</h1> */}

          </div>  
          <div className='navbar-details'>
              <div className="add-session">
                <NavLink to='createsession' className='navlink'>
                  <i className='icon-add' id='add-icon'></i>
                </NavLink>
                  <h2>Session</h2>
              </div>
              <div className="profile">
                    <FaUserAlt id='user-icon'/>
                  <h2>Yukesh</h2>
              </div>

                  <i className='icon-logout' id='logout-icon' onClick={handleLogoutSession}></i>

          </div>
          
        </div>



    </div>
  )
}

export default Navbar 