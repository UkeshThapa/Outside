import React from 'react'
import './TicketTable.scss';
import TicketHeader from './TicketHeader/TicketHeader';
import TicketBody from './TicketBody/TicketBody';
import ticketDetails from './TicketBody/TicketDetailsOfUser';

const TicketTable = () => {

  return (
    <table className='ticket-table'>
        <TicketHeader/>
        <tbody>
        { ticketDetails.map((ticket,index)=>{
          return <TicketBody key={index}  ticket={ticket}/>
        }
        )}
        </tbody>
    </table>
  )
}

export default TicketTable