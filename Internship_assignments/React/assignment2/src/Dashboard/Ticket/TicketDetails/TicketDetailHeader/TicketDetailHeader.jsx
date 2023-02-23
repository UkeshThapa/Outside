import React from 'react'
import './TicketDetailHeader.scss'

const TicketDetailHeader = () => {


  return (  
    <div className='ticket-detail-header'>
        <h3>All tickets</h3>
        <div className='ticket-detail-features'>
            <div className='sort'>
                <i className='icon-sort'/>
                <h3>Sort</h3>
            </div>
            <div className='filter'>
                <i className='icon-filter'/>
                <h3>Filter</h3>
            </div>

        </div>
    </div>
  ) 
}

export default TicketDetailHeader   