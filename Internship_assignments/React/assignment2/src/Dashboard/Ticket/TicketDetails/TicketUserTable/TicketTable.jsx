import React, { useState } from 'react'
import './TicketTable.scss';
import TicketHeader from './TicketHeader/TicketHeader';
import TicketBody from './TicketBody/TicketBody';
import ticketDetails from './TicketBody/TicketDetailsOfUser';

const TicketTable = () => {
  const [ticketDetail,setTicketDetail] = useState(ticketDetails)

  return (
    <table className='ticket-table'>
        <thead>
          <TicketHeader/>
        </thead>
        <tbody>
        { ticketDetail.map((ticket,index)=>{
          return <TicketBody key={index} ticketDetail={ticketDetail} setTicketDetail={setTicketDetail} ticket={ticket}/>
        }
        )}
        </tbody>
    </table>
  )
}

export default TicketTable