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
        { ticketDetails.filter(user=>query?user.detailsMessage.includes(query):true).filter(user=>filter?user.text.includes(filter):true).map((users)=>{
          console.log(query)
          return <TicketBody  user={users}/>
        }
        )}
    </table>
  )
}

export default TicketTable