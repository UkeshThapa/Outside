import React from 'react'
import './SideBarLogo.scss'
import logo from '../../../assets/sidebar_logo.png'
const SideBarLogo = () => {
  return (
    <div className='sidebar-logo'>
      <figure className='logo-container'>
        <img src={logo} alt="img" />
      </figure>
        <h1>
            Dashboard Kit
        </h1>
    </div>
  )
}

export default SideBarLogo