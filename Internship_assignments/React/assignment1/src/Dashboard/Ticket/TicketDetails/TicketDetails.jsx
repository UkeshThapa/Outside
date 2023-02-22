import React from 'react'
import TicketDetailHeader from './TicketDetailHeader/TicketDetailHeader'
import './TicketDetails.scss'
import TicketTable from './TicketUserTable/TicketTable'

const TicketDetails = () => {
  return (
    <div className='ticket-details-container'>
      <TicketDetailHeader/>
      <TicketTable/>
    </div>
  )
}

export default TicketDetails