import React from 'react'
import './TicketTable.scss';
import TicketHeader from './TicketHeader/TicketHeader';
import TicketBody from './TicketBody/TicketBody';
import ticketDetails from './TicketBody/TicketDetailsOfUser';

const TicketTable = ({query,filter}) => {
  {
    if(filter === "All"){
      filter = null;
    }

  }
  return (
    <table className='ticket-table'>
        <TicketHeader/>
        <tbody>
        { ticketDetails.filter(user=>query?user.detailsMessage.includes(query):true).filter(user=>filter?user.text.includes(filter):true).map((users,index)=>{
          return <TicketBody key={index}  user={users}/>
        }
        )}
        </tbody>
    </table>
  )
}

export default TicketTable