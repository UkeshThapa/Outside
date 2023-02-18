import React from 'react'

import SideBarContainer from './SideBar/SideBarContainer';
import TicketContainer from './Ticket/TicketContainer';
import './Dashboard.scss'
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <SideBarContainer/>
        <TicketContainer/>
    </div>
  )
}

export default Dashboard;