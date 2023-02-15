import React from 'react'
import './TicketDetailHeader.scss'


const TicketDetailHeader = () => {
  return (  
    <div className='ticket-detail-header'>
        <h3>All tickets</h3>
        <div className='ticket-detail-features'>
            <i className='icon-sort'>Sort</i>
            <i className='icon-filter'>Filter</i>
        </div>
    </div>
  ) 
}

export default TicketDetailHeader   