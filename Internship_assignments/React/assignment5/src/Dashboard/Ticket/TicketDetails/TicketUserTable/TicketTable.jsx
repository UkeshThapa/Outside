import React from 'react'
import './TicketTable.scss';
import TicketHeader from './TicketHeader/TicketHeader';
import TicketBody from './TicketBody/TicketBody';
// import ticketDetails from './TicketBody/TicketDetailsOfUser';
import useTickets from '../../../../hooks/useTickets';

const TicketTable = ({query,filter}) => {
  {
    if(filter === "All"){
      filter = null;
    }

  }

  const {tickets} = useTickets()
  return (
    <table className='ticket-table'>
      <thead>
        <TicketHeader/>
      </thead>
        <tbody>
        { tickets.filter(user=>query?user.detailsMessage.includes(query):true).filter(user=>filter?user.text.includes(filter):true).map((users,index)=>{
          return <TicketBody key={index}  user={users}/>
        }
        )}
        </tbody>
    </table>
  )
}

export default TicketTable