import React from 'react'

import './Dashboard.scss'
import SideBarContainer from './SideBar/SideBarContainer';
import TicketContainer from './Ticket/TicketContainer';
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <SideBarContainer/>
      <TicketContainer/>
    </div>
  )
}

export default Dashboard;