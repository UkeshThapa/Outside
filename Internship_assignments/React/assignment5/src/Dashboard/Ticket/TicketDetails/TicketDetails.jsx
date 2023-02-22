import React, { useState } from 'react'
import TicketDetailHeader from './TicketDetailHeader/TicketDetailHeader'
import './TicketDetails.scss'
import TicketTable from './TicketUserTable/TicketTable'
import useTickets from '../../../hooks/useTickets'


const TicketDetails = ({query}) => {
  const [filter,setFilter] = useState();
  const {tickets,addTickets,deleteTicket} = useTickets();

  const handleFilterChange = (event)=>{
    setFilter(event.target.value)
  }
  return (
    <div className='ticket-details-container'>
      <TicketDetailHeader onFilterChange={handleFilterChange} filter={filter} addTickets={addTickets}/>
      <TicketTable query={query} filter={filter} tickets={tickets} deleteTicket={deleteTicket}/>
    </div>
  )
}

export default TicketDetails