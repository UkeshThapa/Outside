import React from 'react'
import TicketDetailHeader from './TicketDetailHeader/TicketDetailHeader'
import './TicketDetails.scss'
import TicketTable from './TicketUserTable/TicketTable'

const TicketDetails = ({query}) => {
  
  return (
    <div className='ticket-details'>
      <TicketDetailHeader/>
      <TicketTable query={query}/>
    </div>
  )
}

export default TicketDetails