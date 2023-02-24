import React from 'react'
import './TicketHeader.scss'

const TicketHeader = () => {
  return (
    <tr>
        <th >
          <div className='ticket-header'>
            <h3>Ticket details</h3>
          </div>
        </th>
        <th >
          <div className='ticket-header'>
            <h3>Customer name</h3>
          </div>
        </th>
        <th >
          <div className='ticket-header'>
            <h3>Date</h3>
          </div>
        </th>
        <th >
          <div className='ticket-header'>
            <h3>Priority</h3>
          </div>
        </th>
        <th >
          <div className='ticket-header'>
            <h3></h3>
          </div>
        </th>

    </tr>
  )
}

export default TicketHeader