import React from 'react';
import './SidebarContainer.scss'
import menuItems from './SideBarMenu/SideBarMenuItems';
import SideBarLogo from './SideBarLogo/SideBarLogo';
import SideBarMenu from './SideBarMenu/SideBarMenu';




const SideBarContainer = () => {
  return (
    <div className='sidebar-container'>
        <SideBarLogo/>
        {menuItems.map((menu, index)=>{
              return <SideBarMenu key={index} item ={menu.item} icon={menu.icon} />
        })}
    </div>
  )
}

export default SideBarContainer