import React from 'react'
import './SideBarLogo.scss'
import logo from '../../../../../assets/sidebar_logo.png'
const SideBarLogo = () => {
  return (
    <div className='sidebar-logo'>
      <div className='logo'>
        <img src={logo} alt="img" />
      </div>
        <h1>
            Dashboard Kit
        </h1>
    </div>
  )
}

export default SideBarLogo