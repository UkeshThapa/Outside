import React from 'react'
import './TicketTable.scss';
import TicketHeader from './TicketHeader/TicketHeader';
import TicketBody from './TicketBody/TicketBody';
import ticketDetails from './TicketBody/TicketDetailsOfUser';

const TicketTable = ({query}) => {
  return (
    <table className='ticket-table'>
        <TicketHeader/>
        { ticketDetails.filter(user=>query?user.detailsMessage.includes(query):true).map((users)=>{
          return <TicketBody  user={users}/>
        }
        )}
    </table>
  )
}

export default TicketTable